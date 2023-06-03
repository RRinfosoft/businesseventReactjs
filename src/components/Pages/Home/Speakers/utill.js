import { Col } from "react-bootstrap"

export const speaker = "speaker.png"
export const speakertext = "Speakers"
export const speakertext2 = "Iconic industry-leading speakers"









const speakersCard = [
    {
        pic: "/images/speaker-img/speaker-1.jpg",
        title: "Mike Fermalin",
        para: "Career Expert",
    },
    {
        pic: "/images/speaker-img/speaker-2.jpg",
        title: "Anna Blair",
        para: "Founder ,Marks",
    },
    {
        pic: "/images/speaker-img/speaker-3.jpg",
        title: "Trevor J. Bell",
        para: "Lead Trainer Blids",
    },
]
const speakerfunction = (item) => {
    return (
        <>
            <Col sm={4} >
                <div className="speaker-img-section">
                    <img className="speaker-img-section-fill" src={item.pic} />
                </div>
                <p className="speaker-item-title">{item.title}</p>
                <p className="speaker-item-subtitle">{item.para}</p>
            </Col>
        </>
    )
}
export const mainSpeaker = speakersCard.map(speakerfunction)



const speakersCardSecond = [
    {
        pic: "/images/speaker-img/speaker-4.jpg",
        title: "Michael Rooker",
        para: "Developer Expert",
    },
    {
        pic: "/images/speaker-img/speaker-5.jpg",
        title: "Anna David B.Perez",
        para: "Founder ,M",
    },
    {
        pic: "/images/speaker-img/speaker-6.jpg",
        title: "Trevor J. Bell",
        para: "Lead Trainer Blids",
    },
]
const speakerfunctionSecond = (item) => {
    return (
        <>
            <Col sm={4} >
                <div className="speaker-img-section2">
                    <img className="speaker-img-section-fill" src={item.pic} />
                </div>
                <p className="speaker-item-title">{item.title}</p>
                <p className="speaker-item-subtitle">{item.para}</p>
            </Col>
        </>
    )
}
export const mainSpeakerSecond = speakersCardSecond.map(speakerfunctionSecond)
