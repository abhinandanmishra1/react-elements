import { Card } from '../../blocks/Card';
import { VerticalScroller } from '../../elements/VerticalScroller';
import "./style.css"

export const VerticalScrollerExample = () => {
  return (
    <div className='verticalScrollerExample'>
        <h1>Vertical Scroller</h1>
        <VerticalScroller direction='up' speed='slow' height={300}>
            {
                Array.from({length: 5}).map((_, index) => <Card index={index}/>)
            }
        </VerticalScroller>
    </div>
  )
}
