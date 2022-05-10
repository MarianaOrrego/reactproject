import React, { memo } from 'react';

export const Small = memo (({ values }) => {
    console.log('acá estoy')
  return (
    <small> { values } </small>
  )
})