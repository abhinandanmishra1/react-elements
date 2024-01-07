import React from 'react'
import { HorizontalScroller } from '../../elements/HorizontalScroller'
import { Card } from '../../blocks/Card'

export const HorizontalScrollerExample = () => {
  return (
    <div>
        <h1>Horizontal Scroller</h1>
        <HorizontalScroller direction='right' speed='slow'>
            {
                Array.from({length: 10}).map((_, index) => <Card index={index} />)
            }
        </HorizontalScroller>
    </div>
  )
}
