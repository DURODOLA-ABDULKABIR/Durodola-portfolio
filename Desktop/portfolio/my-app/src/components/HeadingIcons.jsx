import React from "react";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';


function HeadingIcons(){
    let iconStyle = {
        fontSize: "30px"
    };
    return(
            <div className="contactItems">
                <ul>
                    <li><a href="/"><EmailIcon style = {iconStyle} /></a></li>
                    <li><a href="/"><LinkedInIcon style = {iconStyle} /></a></li>
                    <li><a href="/"><WhatsAppIcon style = {iconStyle} /></a></li>
                    <li><a href="/"><TwitterIcon style = {iconStyle} /></a></li>
                    <li><a href="/"><GitHubIcon style = {iconStyle} /></a></li>
                </ul>
            </div>
    )
}

export default HeadingIcons;