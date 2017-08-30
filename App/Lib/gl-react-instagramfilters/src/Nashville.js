import GL from 'gl-react'
import React from 'react'

const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource')
const inputImageTexture2 = resolveAssetSource(require('../resources/nashvilleMap.png'))

const shaders = GL.Shaders.create({
  Nashville: {
    frag: `
      precision highp float;
      varying vec2 uv;

      uniform sampler2D inputImageTexture;
      uniform sampler2D inputImageTexture2;

      void main () {
        vec3 texel = texture2D(inputImageTexture, uv).rgb;
        texel = vec3(
                    texture2D(inputImageTexture2, vec2(texel.r, .83333)).r,
                    texture2D(inputImageTexture2, vec2(texel.g, .5)).g,
                    texture2D(inputImageTexture2, vec2(texel.b, .16666)).b);
        gl_FragColor = vec4(texel, 1.0);

      }`
  }
})

module.exports = GL.createComponent(
  ({inputImageTexture}) => {
    return <GL.Node
      shader={shaders.Nashville}
      uniforms={{
        inputImageTexture,
        inputImageTexture2
      }}
    />
  },
  {
    displayName: 'Nashville'
  }
)
