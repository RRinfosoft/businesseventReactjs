import { Col } from "react-bootstrap"

export const FColumn="images/Home-ab-2.jpg"
export const FColumn2="images/Home-ab-3.jpg"
export const FColumn3="/images/bg.png"
export const FColumn4="/images/events5.png"
export const nob="25"
export const confrence="International Business confernce"
export const we="We’re inviting the top creatives in the tech industry from all over the world to come learn, grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures"

const icon=[
    {
        pic:"/images/icon-1.png",
        title:"When start",
        subtitle:'21th - 24th February 2022',
    },
    {
        pic:"/images/icon-2.png",
        title:"Where to",
        subtitle:'Zhylianska St, 97б, Kyiv, Ukraine.',
    },
]
const iconFunction=(item)=>{
    return(
        <>
        <Col sm={6} className="icon-section">
            <div>
                <img src={item.pic} />
            </div>
            <p className="item-title">{item.title}</p>
            <p className="item-subtitle">{item.subtitle}</p>
        </Col>
        </>
    )
}
export const mainIcon=icon.map(iconFunction)