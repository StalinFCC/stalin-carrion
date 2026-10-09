#!/usr/bin/env bash
set -euo pipefail
mkdir -p assets/video
# Three-second, silent and lightweight cinematic portfolio intro.
# Uses a real screenshot included in the repository. No third-party media.
FONT='/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'
ffmpeg -hide_banner -loglevel error -y \
  -f lavfi -i 'color=c=0x061324:s=960x540:r=30:d=3' \
  -loop 1 -framerate 30 -i assets/img/audiencias.webp \
  -filter_complex "[0:v]format=rgba,drawgrid=w=72:h=72:t=1:c=0x1B4A79@0.35[bg];[1:v]scale=580:-1:flags=lanczos,format=rgba,colorchannelmixer=aa=0.65[img];[bg][img]overlay=x='470+18*sin(2*t)':y='124+7*sin(3*t)':shortest=1,drawbox=x=0:y=0:w=535:h=540:c=0x061324@0.64:t=fill,drawtext=fontfile=${FONT}:text='STALIN CARRION':fontcolor=0xB1DFFF:fontsize=23:x=64:y=128,drawtext=fontfile=${FONT}:text='UNITY + C#':fontcolor=0xF2F8FF:fontsize=59:x=60:y=212:enable='between(t,0,0.999)',drawtext=fontfile=${FONT}:text='XR + SIMULATION':fontcolor=0xF2F8FF:fontsize=46:x=60:y=212:enable='between(t,1,1.999)',drawtext=fontfile=${FONT}:text='REAL-TIME 3D':fontcolor=0xF2F8FF:fontsize=53:x=60:y=212:enable='gte(t,2)',drawtext=fontfile=${FONT}:text='INTERACTIVE EXPERIENCES':fontcolor=0x66B8FF:fontsize=22:x=64:y=295,drawtext=fontfile=${FONT}:text='PORTFOLIO 2026':fontcolor=0xA0BBD6:fontsize=18:x=64:y=415,format=yuv420p[v]" \
  -map '[v]' -t 3 -an -c:v libx264 -preset medium -crf 25 -pix_fmt yuv420p \
  -movflags +faststart assets/video/intro-blue.mp4
ffprobe -v error -show_entries format=duration,size -of default=noprint_wrappers=1 assets/video/intro-blue.mp4
