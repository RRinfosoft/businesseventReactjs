import { Col } from "react-bootstrap"

export const SubColImg = "/images/About-img/about_page_img.jpg"
export const SubSecondimg = "/images/About-img/about_content_shape1.png"
export const Why = "Why Attend Event"
export const great = "Great opportunity to develop you"

export const iconArrary = [
    {
        pic: "/images/About-img/about_icon_1.png",
        day: "3 Days Workshops",
        title: "We’re inviting the top creatives in the ",
        subtitle:" tech industry from all over the world",
    },
    {
        pic: "/images/About-img/about_icon_2.png",
        day: "3 Days Workshops",
        title: "We’re inviting the top creatives in the ",
        subtitle:" tech industry from all over the world",
    },
    {
        pic: "/images/About-img/about_icon_3.png",
        day: "3 Days Workshops",
        title: "We’re inviting the top creatives in the ",
        subtitle:" tech industry from all over the world",
    },
]

const iconArrayFunction = (item) => {
    return (
        <>
       
                <div className="icon-img2">
                    <img src={item.pic} />
                </div>
         
                <p className="item-day">{item.day}</p>
                <p className="item-titles">{item.title}</p>
                <p className="item-titles">{item.subtitle}</p>
    
        </>
    )
}
export const mainIconArray = iconArrary.map(iconArrayFunction)