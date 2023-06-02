import { Col } from "react-bootstrap"
export const spons="Sponsors"
export const spons2="50+ leading companies with us"






const bannerimg = [
    {
        pic: "/images/spons-1.png",
    },
    {
        pic: "/images/spons-2.png",
    },
    {
        pic: "/images/spons-3.png",
    },
    {
        pic: "/images/spons-4.png",
    },
]
const bannerimgFunction=(item)=>{
    return(
        <>
        <Col onSubmit={3} className="border-column">
            <div className="icon-img">
                <img className="icon-img-fill" src={item.pic} />
            </div>
        </Col>
        
        </>
    )
}
export const mainBannericon=bannerimg.map(bannerimgFunction)



const bannerimgsecond = [
    {
        pic: "/images/spons-5.png",
    },
    {
        pic: "/images/spons-6.png",
    },
    {
        pic: "/images/spons-7.png",
    },
    {
        pic: "/images/spons-9.png",
    },
]
const bannerimgFunctionsecond=(item)=>{
    return(
        <>
        <Col onSubmit={3} className="border-column">
            <div className="icon-img">
                <img className="icon-img-fill" src={item.pic} />
            </div>
        </Col>
        
        </>
    )
}
export const mainBannericonsecond=bannerimgsecond.map(bannerimgFunctionsecond)