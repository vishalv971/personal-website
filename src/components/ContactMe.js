import React from 'react';


const SOCIAL_MEDIA_LINKS = [
    {
        id: 4,
        link: 'https://github.com/vishalv971',
        image: 'https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/github.svg'
    },
    {
        id: 2,
        link: 'https://linkedin.com/in/vishalv971',
        image: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg'
    },
    {
        id: 1,
        link: 'https://twitter.com/VishalVishwan16',
        image: 'https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg'
    },
    {
        id: 3,
        link: 'mailto:vishalviswanathan9@gmail.com',
        image: 'https://cdn.jsdelivr.net/npm/simple-icons@3.4.0/icons/gmail.svg'
    },
    {
        id: 5,
        link: 'https://medium.com/@vishalv97',
        image: 'https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/medium.svg'
    }
]

const SocialProfile = props => {
    const { link, image } = props.socialProfile;
    return (
        <div style={{display: 'inline-block', margin : 10}}>
            <a target='_blank' href={link}><img src={image} alt='social_media_icon' width={35} height={35}></img></a>
        </div>
    );
}


const ContactMe = () => (
    <div style={{display: 'inline'}}>
        <h3> Reach out! I am always happy to connect </h3>
        {
            SOCIAL_MEDIA_LINKS.map(SOCIAL_PROFILE => {
                return(
                    <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}></SocialProfile>
                );
            })
        }
    </div>
)

export default ContactMe;