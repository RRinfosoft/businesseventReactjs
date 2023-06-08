import { Col } from "react-bootstrap"

export const videotag="/images/event-img.png"
export const text="Event List"
export const text2="Home / Event List"

export const Newsletter="/images/timer-1.jpeg"
export const samllBG="/images/event-img/event-small.png"




const EventArr=[
    {
        pic:"/images/event-img/event-1.jpg",
        dolor:"$25",
        title:" It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        PricePic:"/images/event-img/event-price.jpeg",
         EndTitle:"Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris",
         last:"Get Ticket Now",
    },
    {
        pic:"/images/event-img/event-2.jpg",
        dolor:"$35",
        title:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        PricePic:"/images/event-img/event-price.jpeg",
        EndTitle:"Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        last:"Get Ticket Now",
    },
    {
        pic:"/images/event-img/event-3.jpg",
        dolor:"Free",
        title:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature ",
        PricePic:"/images/event-img/event-price.jpeg",
        EndTitle:"Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        last:"Get Ticket Now",
    },
]

const EventFun=(item)=>{
    return(
        <>
        <Col sm={4}>
            <div className="event-imgs">
                <img src={item.pic} />
            </div>
            <p className="dolor-text">{item.dolor}</p>
            <p className="dolor-title">{item.title}</p>
            <div className="event-small-img">
                <img src={item.PricePic} />
                <p>{item.EndTitle}</p>
                <p className="last">{item.last}</p>
            </div>
        </Col>
        </>
    )
}
export const mainEvents=EventArr.map(EventFun)








const EventArr2=[
    {
        pic:"/images/event-img/event-4.jpg",
        dolor:"Free",
        title:" It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
        PricePic:"/images/event-img/event-price.jpeg",
         EndTitle:"Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris",
         last:"Get Ticket Now",
    },
    {
        pic:"/images/event-img/event-5.jpg",
        dolor:"High",
        title:"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using",
        PricePic:"/images/event-img/event-price.jpeg",
        EndTitle:"Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        last:"Get Ticket Now",
    },
    {
        pic:"/images/event-img/event-6.jpg",
        dolor:"$32",
        title:" Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature ",
        PricePic:"/images/event-img/event-price.jpeg",
        EndTitle:"Managing a popular open source project can be daunting at first. How do we maintain all these issues, or automatically trigger enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        last:"Get Ticket Now",
    },
]

const EventFun2=(item)=>{
    return(
        <>
        <Col sm={4}>
            <div className="event-imgs">
                <img src={item.pic} />
            </div>
            <p className="dolor-text">{item.dolor}</p>
            <p className="dolor-title">{item.title}</p>
            <div className="event-small-img">
                <img src={item.PricePic} />
                <p>{item.EndTitle}</p>
                <p className="last">{item.last}</p>
            </div>
        </Col>
        </>
    )
}
export const mainEvents2=EventArr2.map(EventFun2)