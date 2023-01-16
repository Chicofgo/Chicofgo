
import React from 'react';
import styles from './Path.module.scss';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';
import '../../../Global-styles/global.scss';

const Path = ({ pathObj, backgroundColor, url = [] }) => {
  const newUrl = url.length;
  const { Path_font, Path_wrap, Path } = styles;

  return (
    <div className={` ${Path}`}>



      <div className={`${Path_font} ${Path_wrap} d-flex align-items-center`}>
        <Link to="/">
          <span className="maincolor">首頁</span>
        </Link>
        {pathObj.path.map((path, i) => {
          return (
            <Link
              to={url && i === newUrl - 1 ? url[newUrl - 1] : '#'}
              key={v4()}
            >
              <span className="maincolor">{path}</span>
            </Link>

          );
        })}
      </div>
    </div>
  );
};

export default Path;

