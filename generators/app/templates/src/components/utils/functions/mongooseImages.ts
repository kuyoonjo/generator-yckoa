import * as mongoose from 'mongoose';
import { Image } from '../../../mongoose';
import { root } from '../../../config';
import * as fsp from 'fs-promise';
import * as del from 'del';
import * as sharp from 'sharp';

export interface mongooseImagesOptions { 
  baseDir?: string;
  generateUrl?: (baseDir: string, path: string) => string;
}

export function mongooseImages(schema: mongoose.Schema, options: mongooseImagesOptions) {
  schema.pre('save', async function(next) {
    let self = this;
    let baseDir = options.baseDir || root + '/static';
    let dir = baseDir + '/' + self._id;
    let exists = await fsp.exists(dir);
    if(!exists) {
      await fsp.mkdir(dir);
    }
    for(let path of Object.keys(schema['paths'])) {
      if (schema['paths'][path].constructor == Image) {
        if (self[path] && self[path].length) {
          let tmp = self[path][0].path;
          let meta = await sharp(tmp).metadata();
          let filePath = `${dir}/${path}`;
          await del(`${dir}/${path}.*`);
          await fsp.rename(tmp, filePath + '.' + meta.format);
          let imagePath = `${self._id}/${path}.${meta.format}`;
          let url;
          if(options.generateUrl) {
            url = options.generateUrl(baseDir, `${self._id}/${path}.${meta.format}`);
          } else {
            url = filePath;
          }
          self[path] = {
            url: url,
            width: meta.width,
            height: meta.height,
            channel: meta.channels,
            hasAlpha: meta.hasAlpha,
            hasProfile: meta.hasProfile,
            format: meta.format,
            size: self[path][0].size
          }
        }
      }
    }
    next();
  });

  schema.pre('remove', function(next) {
    let dir = root + '/static/' + this._id;
    del(dir);
    next();
  });
}