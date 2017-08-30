import GL from 'gl-react'
import React from 'react'

const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource')
const inputImageTexture2 = resolveAssetSource(require('../resources/kelvinMap.png'))

const shaders = GL.Shaders.create({
  LordKelvin: {
    frag: `
      precision highp float;
      varying vec2 uv;

      uniform sampler2D inputImageTexture;
      uniform sampler2D inputImageTexture2;

      void main () {

        vec3 texel = texture2D(inputImageTexture, uv).rgb;

        vec2 lookup;
        lookup.y = .5;

        lookup.x = texel.r;
        texel.r = texture2D(inputImageTexture2, lookup).r;

        lookup.x = texel.g;
        texel.g = texture2D(inputImageTexture2, lookup).g;

        lookup.x = texel.b;
        texel.b = texture2D(inputImageTexture2, lookup).b;

        gl_FragColor = vec4(texel, 1.0);

      }`
  }
})

module.exports = GL.createComponent(
  ({inputImageTexture}) => {
    return <GL.Node
      shader={shaders.LordKelvin}
      uniforms={{
        inputImageTexture,
        inputImageTexture2
      }}
    />
  },
  {
    displayName: 'LordKelvin'
  }
)
