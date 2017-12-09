import React, { Component } from "react";

import house5 from './images/house5.jpg';
import house4 from './images/house4.jpg';
import house3 from './images/house3.jpg';
import house2 from './images/house2.jpg';

import team1 from './images/team1.jpg';
import team2 from './images/team2.jpg';
import team3 from './images/team3.jpg';
import team4 from './images/team4.jpg';

import CEO from './images/CEO.jpg';
import ArcAle from './images/ArcAle.jpg';
import ArcBhush from './images/ArcBhush.jpg';
import ArcVanki from './images/ArcVanki.jpg';

class Home extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="w3-content w3-padding" style={{maxWidth: "1564px"}}>

                {/* Project Section */}
                <div className="w3-container w3-padding-32" id="projects">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                        Projects</h3>
                </div>

                <div className="w3-row-padding">
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-display-container">
                            <div className="w3-display-topleft w3-black w3-padding">
                                Summer House
                            </div>
                            <img src="http://hdlatestwallpaper.com/wp-content/uploads/2014/04/house-architecture-photography-hd-wallpaper-1920x1200-9237.jpg" alt="House"
                                 style={{width: "100%"}}/>
                        </div>
                    </div>

                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-display-container">
                            <div className="w3-display-topleft w3-black w3-padding">
                                Brick House
                            </div>
                            <img src="http://hdlatestwallpaper.com/wp-content/uploads/2014/04/house-architecture-photography-hd-wallpaper-1920x1200-9237.jpg" alt="House"
                                 style={{width: "100%"}}/>
                        </div>
                    </div>

                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-display-container">
                            <div className="w3-display-topleft w3-black w3-padding">
                                Renovated
                            </div>
                            <img src="http://www.impressiveinteriordesign.com/wp-content/uploads/2015/04/A-Collection-Of-Modern-Styles-Of-House-Architecture-6.jpg" alt="House"
                                 style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-display-container">
                            <div className="w3-display-topleft w3-black w3-padding">
                                Barn House
                            </div>
                            <img src="http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvn5iRm4zlDeOOKkAb_MdgTNVxE-H1FQZ_-9flpd0cEUgyNHiPA" alt="House"
                                 style={{width: "100%"}}/>
                        </div>
                    </div>
                </div>

                <div className="w3-row-padding">
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-display-container">
                            <div className="w3-display-topleft w3-black w3-padding">
                                Summer House
                            </div>
                            <img src="http://www.impressiveinteriordesign.com/wp-content/uploads/2015/04/A-Collection-Of-Modern-Styles-Of-House-Architecture-6.jpg" alt="House"
                                 style={{width: "99%"}}/>
                        </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-display-container">
                            <div className="w3-display-topleft w3-black w3-padding">
                                Brick House
                            </div>
                            <img src="http://hdlatestwallpaper.com/wp-content/uploads/2014/04/house-architecture-photography-hd-wallpaper-1920x1200-9237.jpg" alt="House"
                                 style={{width: "99%"}}/>
                        </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-display-container">
                            <div className="w3-display-topleft w3-black w3-padding">
                                Renovated
                            </div>
                            <img src="http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvn5iRm4zlDeOOKkAb_MdgTNVxE-H1FQZ_-9flpd0cEUgyNHiPA" alt="House"
                                 style={{width: "99%"}}/>
                        </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <div className="w3-display-container">
                            <div className="w3-display-topleft w3-black w3-padding">
                                Barn House
                            </div>
                            <img src="http://hdlatestwallpaper.com/wp-content/uploads/2014/04/house-architecture-photography-hd-wallpaper-1920x1200-9237.jpg" alt="House"
                                 style={{width: "99%"}}/>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="w3-container w3-padding-32" id="about">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
                        About</h3>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className="w3-row-padding w3-grayscale">
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <img src="http://scontent.fblr3-2.fna.fbcdn.net/v/t1.0-9/14606303_1103060263096295_8984220683938023318_n.jpg?oh=ba439a38f55c29350db3903c8fec3c61&oe=5AD187B3" alt="Rajkumar"
                             style={{width: "100%"}}/>

                        <h3>Rajkumar Arisetty</h3>

                        <p className="w3-opacity">CEO Founder</p>

                        <p>Phasellus eget enim eu lectus faucibus vestibulum.
                            Suspendisse sodales pellentesque elementum.</p>

                        <p>
                            <button className="w3-button w3-light-grey w3-block">
                                Contact
                            </button>
                        </p>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <img src="http://scontent.fblr3-2.fna.fbcdn.net/v/t1.0-9/10301514_733012626737308_1625843315459733144_n.jpg?oh=96999a65f6cc64e8ec3add3d68406da5&oe=5AD2B394" alt="Alekhya"
                             style={{width: "100%"}}/>

                        <h3>Alekhya Arisetty</h3>

                        <p className="w3-opacity">Architect</p>

                        <p>Phasellus eget enim eu lectus faucibus vestibulum.
                            Suspendisse sodales pellentesque elementum.</p>

                        <p>
                            <button className="w3-button w3-light-grey w3-block">
                                Contact
                            </button>
                        </p>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <img src="http://scontent.fblr3-2.fna.fbcdn.net/v/t1.0-9/18951339_1147189875386359_4009851883280236953_n.jpg?oh=2d67d0adc9e3757f7f27d32008981c18&oe=5AC01D04" alt="Bhushan"
                             style={{width: "100%"}}/>

                        <h3>Naga Bhushan</h3>

                        <p className="w3-opacity">Architect</p>

                        <p>Phasellus eget enim eu lectus faucibus vestibulum.
                            Suspendisse sodales pellentesque elementum.</p>

                        <p>
                            <button className="w3-button w3-light-grey w3-block">
                                Contact
                            </button>
                        </p>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                        <img src="http://scontent.fblr3-2.fna.fbcdn.net/v/t1.0-9/12289503_1114092148623300_5931330250107927289_n.jpg?oh=473a692f05aef99805f6699520969f38&oe=5AC82228" alt="Venki"
                             style={{width: "100%"}}/>

                        <h3>Venki Arisetty</h3>

                        <p className="w3-opacity">Architect</p>

                        <p>Phasellus eget enim eu lectus faucibus vestibulum.
                            Suspendisse sodales pellentesque elementum.</p>

                        <p>
                            <button className="w3-button w3-light-grey w3-block">
                                Contact
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;