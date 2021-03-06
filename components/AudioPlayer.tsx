import React from "react";
import { AudioPlayerControlSprite, Audio } from "react-audio-player-pro";
// import "react-audio-player-pro/dist/style.css"; // ! TODO FIX IMPORT
import styled from "styled-components";

const Style = styled.div`
  .f3cc59 {
    display: none;
  }
  ._59d228 {
    border-radius: 4px;
    height: 28px;
    width: 28px;
  }
  ._7e7b1e,
  ._59d228 {
    box-sizing: border-box;
    display: block;
    padding: 4px;
  }
  ._7e7b1e {
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    flex-shrink: 0;
    height: 38px;
    margin: 0;
    outline: none;
    width: 38px;
  }
  ._7e7b1e.d03524 ._59d228,
  ._7e7b1e:active ._59d228 {
    background-color: #e5e5e5;
  }
  ._7e7b1e.e9c906 {
    opacity: 0.75;
    pointer-events: none;
  }
  ._7e7b1e._36e927 {
    border: 1px solid #5a5a5a;
  }
  ._547c58 {
    color: #333;
    flex-shrink: 0;
    font-family: Helvetica, Verdana, Geneva, sans-serif;
    font-size: 12px;
    line-height: 1;
    margin: 0;
  }
  ._547c58,
  .dd875e {
    display: block;
    padding: 0;
  }
  .dd875e {
    background-color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    height: 38px;
    position: relative;
    width: 100%;
  }
  .dd875e._911595 {
    display: block;
  }
  .dd875e._88628d {
    pointer-events: none;
  }
  .d51c7c {
    background-color: #dadada;
    height: 2px;
    left: 6px;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    width: calc(100% - 12px);
    z-index: 0;
  }
  ._407fe2,
  .d51c7c {
    border-radius: 1px;
  }
  ._407fe2 {
    background-color: #408af0;
    height: 100%;
    transform-origin: left center;
    width: 100%;
  }
  ._29c928 {
    height: 100%;
    left: 6px;
    position: absolute;
    top: 0;
    width: calc(100% - 24px);
    z-index: 1;
  }
  ._98d7c4 {
    background-color: #408af0;
    border-radius: 6px;
    display: block;
    height: 12px;
    margin-top: -6px;
    position: absolute;
    top: 50%;
    width: 12px;
  }
  ._88628d ._98d7c4 {
    background-color: #dadada;
  }
  ._911595 ._98d7c4 {
    box-shadow: 0 0 0 6px rgba(64, 138, 240, 0.2);
  }
  .c405b1 {
    border: 0;
    cursor: pointer;
    display: block;
    height: 100%;
    left: 6px;
    margin: 0;
    opacity: 0;
    outline: none;
    padding: 0;
    position: absolute;
    top: 0;
    width: calc(100% - 12px);
    z-index: 2;
  }
  .da0b0d {
    display: block;
    flex-shrink: 0;
    height: 38px;
    overflow-x: hidden;
    position: relative;
    width: 38px;
    z-index: 0;
  }
  .d8f116 {
    outline: initial;
    pointer-events: none;
  }
  ._0ee3bf {
    appearance: none;
    background-color: #fff;
    border: 0;
    cursor: pointer;
    display: block;
    font-family: monospace;
    height: 100%;
    opacity: 0;
    outline: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  ._0ee3bf:focus {
    min-width: 100%;
    width: auto;
  }
  ._0ee3bf:focus option:first-child,
  .fd1431 {
    display: none;
  }
  ._6a435a {
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: normal;
    padding: 6px;
    width: 100%;
  }
  .cdb4fb {
    padding: 0 4px;
  }
  ._37ab58 {
    flex-shrink: 0;
    width: 76px;
  }
  ._188972 {
    display: block;
    outline: 0;
  }
  @keyframes _1b8182 {
    0% {
      transform: rotate(0);
    }
    to {
      transform: rotate(1turn);
    }
  }
  ._395527 {
    animation-direction: normal;
    animation-duration: 0.75s;
    animation-fill-mode: none;
    animation-iteration-count: infinite;
    animation-name: _1b8182;
    animation-play-state: running;
    animation-timing-function: linear;
  }
  @keyframes eaffac {
    0% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .e48c57 {
    animation-direction: normal;
    animation-duration: 0.5s;
    animation-fill-mode: none;
    animation-iteration-count: 1;
    animation-name: eaffac;
    animation-play-state: running;
    animation-timing-function: linear;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: center;
    left: 0;
    overflow: hidden;
    padding: 12px;
    position: static;
    top: 0;
    width: 100%;
    z-index: 5;
  }
  ._3fad33 {
    z-index: auto;
  }
  ._395527 {
    border-radius: 100%;
    border: 5px solid #f0f0f0;
    border-top-color: #444;
    box-sizing: border-box;
    display: block;
  }
  .ea5806 {
    align-items: center;
    display: flex;
    flex-direction: row;
  }
  ._97eb17 {
    display: block;
    padding: 0 4px;
  }
  ._0ffd4f {
    display: block;
    flex-shrink: 0;
    width: 76px;
  }
  ._1b0bc4 {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .da7feb {
    background-color: #fff;
    box-sizing: border-box;
    display: block;
    padding: 13px 11px 7px;
    position: relative;
    width: 100%;
  }
  .da7feb .a6b10e {
    left: 15px;
    top: 19px;
  }
  .e41919 {
    background-color: #f5f5f5;
    border-bottom: 4px solid #fff;
    border-top: 4px solid #fff;
    box-sizing: border-box;
    display: block;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .cad308 {
    align-items: center;
    display: flex;
    flex-direction: row;
    font-family: Helvetica, Verdana, Geneva, sans-serif;
    font-size: 14px;
    line-height: 1.4;
    margin: 0;
    min-height: 48px;
    padding: 0 6px 0 0;
  }
  .cad308._3c8845,
  .cad308:hover {
    background-color: #e8e8e8;
  }
  ._2acf08 {
    align-items: center;
    background-color: transparent;
    border: 0;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    height: 48px;
    justify-content: center;
    margin: 0;
    outline: none;
    overflow: hidden;
    padding: 0;
    width: 48px;
  }
  ._2acf08,
  ._466456,
  ._979981 {
    flex-shrink: 0;
    position: relative;
  }
  ._466456,
  ._979981 {
    background-color: #cbcbcb;
    border: 3px solid #cbcbcb;
    border-radius: 100%;
    display: block;
    height: 18px;
    width: 18px;
    z-index: 10;
  }
  ._466456 {
    background-color: #d2dff5;
    border: 3px solid #d2dff5;
  }
  ._25eb27 {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    min-height: 48px;
    overflow: hidden;
    padding: 6px 8px 6px 0;
  }
  .efdbcb {
    display: block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
    overflow: hidden;
    padding: 0;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  ._876f0f {
    display: none;
  }
  ._13ff81 {
    flex-shrink: 0;
    padding-right: 5px;
  }
  ._6a8102 svg {
    background-color: #fff;
  }
  ._068c8f {
    display: none;
  }
  ._19b00e {
    display: block;
  }
  ._8ef79e {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 6px 22px;
  }
  ._001158 {
    background-color: #fff;
  }
  ._54f155 {
    display: block;
    padding-bottom: 48px;
  }
  ._54f155:last-child {
    padding-bottom: 12px;
  }
  ._54eef9 {
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    box-sizing: border-box;
    color: #333;
    display: block;
    flex-grow: 1;
    font-family: Helvetica, Verdana, Geneva, sans-serif;
    font-size: 18px;
    margin: 0 4px 0 0;
    padding: 3px 11px;
  }
  ._54eef9:active,
  ._54eef9:hover {
    background-color: #f5f5f5;
    border-color: #333;
  }
  ._04ff88,
  ._800605 {
    background-color: #fff;
    cursor: auto;
    display: block;
    flex-shrink: 0;
    float: right;
    opacity: 0.5;
    pointer-events: none;
  }
  ._04ff88 {
    cursor: pointer;
    opacity: 1;
    pointer-events: auto;
  }
  ._81f4a9 {
    align-items: stretch;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-bottom: 4px;
  }
  ._77a288 {
    background-color: #fff;
    display: block;
    font-size: 24px;
    line-height: 1;
    margin: 0;
    padding: 22px 6px;
    text-align: center;
  }
`;

interface IAudioPlayerProps {
  src: string;
  mediaMetadata?: { title: "" };
  className?: string;
  onDidMount?: () => void;
  useRepeatButton?: boolean;
  downloadFileName?: string;
}

const AudioPlayer = ({
  src,
  mediaMetadata = { title: "" },
  className = "",
  onDidMount = undefined,
  useRepeatButton = false,
  downloadFileName,
}: IAudioPlayerProps): JSX.Element => (
  <Style>
    <AudioPlayerControlSprite />
    <Audio
      src={src}
      mediaMetadata={mediaMetadata}
      className={className}
      onDidMount={onDidMount}
      downloadFileName={downloadFileName}
      useRepeatButton={useRepeatButton}
    />
  </Style>
);

export default AudioPlayer;
