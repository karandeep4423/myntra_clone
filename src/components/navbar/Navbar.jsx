import React from 'react'
import '../navbar/Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { hexToRgb } from '@mui/system';
export default function Navbar() {
    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">  </div>
                <div className="leftelements">
                    <div className="row">
                        <span className="navele">Men</span>
                        <span className="navele">women</span>
                        <span className="navele">kids</span>
                        <span className="navele">home & living</span>
                        <span className="navele">beauty</span></div>
                </div>
                <div className="input">
                    <div className="firsticon">
                        <span className="icon"><  SearchIcon /></span>
                    </div>
                    <input className="placeholdertext" placeholder="Search for products, brands and more"></input>
                </div>
                <div className="rightele">
                    <div className="usericon"></div>
                    <span className="usertext">Profile</span>
                    <div className="usericon1"></div>
                    <span className="usertext1">Wishlist</span>
                    <div className="usericon2"></div>
                    <span className="usertext2">Bag</span>
                </div>
            </div>
            <div className="invitebox">
                <div className="elebox">
                    <img className="imgicon" src="https://constant.myntassets.com/pwa/assets/img/rupee_illustration.png"></img>
                    <span className="texticon">Invite friends to Big Fashion Festival Sale & get up to ₹150 MynCash for every person who visits</span>
                    <span className="texticon1">INVITE NOW</span>
                </div>
            </div>
            <div className="shippingbox">
                <img className="shippingimg" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/9/18/76b2760c-e6b6-46b9-8156-0b3f1660a6f11600435378009-FS-DK.jpg"></img>
            </div>
            <div className="poster">
                <img className="posterimg" src="/img/poster.png"></img>
            </div>
            <div className="slider">
                <Carousel >
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/38b4f81a-de8e-4ffc-989e-0f0d30081a2a1633010449991-ICICI_Desktop.jpghttps://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/38b4f81a-de8e-4ffc-989e-0f0d30081a2a1633010449991-ICICI_Desktop.jpg"></img>
                    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/497738c4-3fe2-4c4a-9d6a-17d93a931d531633010449983-Kotak_Desktop.jpg"></img>
                </Carousel>
            </div>

            <img className="fashionimg" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/10/9/7b8e882d-5d85-4ed6-b669-64a29b2b796c1633749265034-DK_7-12.jpg"></img>
            <img className="biggestimg" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/952000b2-aad0-4f5a-a93e-9e02b245423e1633006826096-Biggest-Festive-Offers--1-.jpg"></img>
            <div className="firstcardrow">
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/226e21ef-d210-418d-aa0b-fb77f74372181632716459319-Adidas_-_Reebok.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/0ef4168a-db22-4060-95c3-519c6d353c391632716459328-All.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/8d22dd87-95ec-4417-b950-8504c43b7d7e1632716459338-Anouk-_Sangria.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/29/26704bec-832e-40dc-9045-2bd40b7bd1ba1632934770682-image_jpeg_471946816.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/67ed4b66-986c-414e-af01-1594ed2612621632716459382-BB-_VH___Shirts_-_Trousers.jpg"></img>
            </div>
            <img className="biggestimg" style={{ marginTop: "572px" }} src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/952000b2-aad0-4f5a-a93e-9e02b245423e1633006826096-Biggest-Festive-Offers--1-.jpg"></img>
            <div className="secondcardrow">
                <img className="cardimg1" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/105dd10a-8421-48a7-9320-c3012093f5b91632750586896-Backpacks.jpg"></img>
                <img className="cardimg1" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/10f701f5-cb12-4909-a7c7-e40a204c47e41632750586902-Beauty-Essentials.jpg"></img>
                <img className="cardimg1" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/ec073743-3efe-4a93-b30c-bb7b608cc7641632750586926-Casual-Shirts.jpg"></img>
                <img className="cardimg1" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/a81eedb4-b3ab-41de-b1a6-6796b1db423a1632750586944-Dresses.jpg"></img>
                <img className="cardimg1" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/346a8ae7-bf95-4050-87bf-2509cd99131c1632750586965-Flip-Flops.jpg"></img>
            </div>
            <div className="thirdrow">
                <img className="cardimg1" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/fd9c1cb6-da53-45bf-86cc-5a62ae3850711632750586971-Formal-Shirts.jpg"></img>
                <img className="cardimg1" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/c301731a-f6d8-4ee4-a21c-e446074ec5ef1632750586958-Flats-_-Heels.jpg"></img>
                <img className="cardimg1" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/aca5a625-4f08-4b7a-98ad-8f6fe5754ffe1632750586914-Bras-_-Briefs.jpg"></img>
                <img className="cardimg1" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/6df86c51-750e-4732-b6f3-d32abe58ff181632750587013-Jeans-01.jpg"></img>
                <img className="cardimg1" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/904531ec-57bf-4842-a807-e2ddb81465431632750586951-Face-Washes-_-Moisturisers.jpg"></img>
            </div>
            <img className="topimg" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/078d94d7-255c-4750-8bcc-71551d2ce2121633003692453-Top-Offers-On-Brands--1-.jpg"></img>
            <div className="fourthrow">
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/1668d711-5d20-4ab0-99a4-ff6d0a1451471632754360772-W.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/3ca6047f-2013-4baa-bbbc-158e10a51d9f1632754360733-U.S.-Polo-Assn..jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/a4494c22-e4e2-49de-8d2b-7753fea4d7ed1632754360763-Vero-Moda.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/82aa0fed-cc09-4553-b597-ce94b64ac6611632754360606-Jack-_-Jones.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/a0d270e4-703d-4683-b641-0f9ca586a17b1632754360615-Levis.jpg"></img>
            </div>
            <img className="bestimg" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/9a9ba4fa-3770-4c68-b979-f2fc2ded9ee31633004260616-Best-Of-Brands--5-.jpg"></img>
            <div className="fifthrow">
                <img className="cardimg" style={{ height: "316px" }} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/51cb1c73-b3e9-460b-a44d-65e38befe6f31632747262819-M.A.C-HP_Top-tile-1-Oct.jpg"></img>
                <img className="cardimg" style={{ height: "316px" }} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/99f0ef38-5a2b-44b3-baee-1b1ac289a0c51632736505839-louis.jpg"></img>
                <img className="cardimg" style={{ height: "316px" }} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/944a428f-9d77-4657-a773-2e542471b8931632719480030-Inddus_HP-Tile.jpg"></img>
                <img className="cardimg" style={{ height: "316px" }} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/29f975dd-5944-438f-b598-d48c4411ac131632736505869-uspahome.jpg"></img>
                <img className="cardimg" style={{ height: "316px" }} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/0255ff42-01fe-4aa5-b400-b81fc6437e831632736505811-highlander.jpg"></img>
            </div>
            <div className="sixthrow">
                <img className="cardimg" style={{ height: "316px" }} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/29/82265eb7-1d46-4138-8ece-00bd311368c41632923141918-boAt_Toptile.jpeg"></img>
                <img className="cardimg" style={{ height: "316px" }} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/1e3f11c1-8694-4ca1-bbee-37799570fa8d1632736505753-allen-solly.jpg"></img>
                <img className="cardimg" style={{ height: "316px" }} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/29/f9a67af9-3e16-44be-a6a2-4869f2ed9e671632920575116-jack-home.jpg"></img>
                <img className="cardimg" style={{ height: "316px" }} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/27/f8945730-caba-4c2f-ba4f-23f8ae9292171632763783049-dyson-HP_Top-Tile-1-Oct.jpg"></img>
                <img className="cardimg" style={{ height: "316px" }} src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/24/753e5d6f-4349-4fae-9bd7-4a428191ef5c1632494703089-Vero-Top.jpg"></img>
            </div>
            <img className="clothingimg" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/09d5552b-6869-407e-85f1-330e237f212a1633017101055-Best-Of-Clothing.jpg"></img>
            <div className="seventhrow">
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/15/3a3e30ae-a98c-4007-a991-cacfc03e061c1631689392544-Kurta_Sets.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/15/465f6f59-a31b-4620-b696-5eed9d9072741631689392660-Sarees.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/15/3a65c713-13b4-4db2-8726-21ebff35654a1631689392619-Myntra_Unique_Indian_Wear.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/15/6261d59c-b9d1-4ceb-90fa-57a97d6d7ddb1631689392731-W.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/15/204dc152-4569-4d92-a4f4-987c9d4afd451631689392414-Biba.jpg"></img>
            </div>
            <img className="innerwearimg" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/6d83eae5-9670-41a4-9f6a-b81bcd06c63b1633017101043-Best-Of-Innerwear---Loungewear.jpg"></img>
            <div className="eighthrow">
                <img style={{ width: "240px", height: "315px" }} className="cardimg" src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/15/a03af984-2228-4a21-a76c-5d3bb1d19b781631693767363-ETC_.jpg"></img>
                <img style={{ width: "240px", height: "315px" }} className="cardimg" src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/15/71391cab-be2a-4bf4-b400-5585189546ad1631693767355-Dressberry_.jpg"></img>
                <img style={{ width: "240px", height: "315px" }} className="cardimg" src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/15/670d20e2-021e-463a-b773-26588e053cab1631693767456-Roadster_.jpg"></img>
                <img style={{ width: "240px", height: "315px" }} className="cardimg" src="https://assets.myntassets.com/f_webp,w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/15/4eb2a459-4ab8-415d-80af-f4c68e871b8b1631693767340-Bras_-copy-_.jpg"></img>
            </div>
            <img className="footwearimg" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/b9f98018-f3f0-488e-829d-e7c2d79fff2b1633017101050-Best-Of-Footwear.jpg"></img>
            <div className="ninthrow">
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/15/daaedc48-a488-4d27-8f53-9a956ca8d8c01631694931938-Ethnic_Footwear.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/15/9b2e838a-3aa7-4a57-b085-f2cab791c86d1631694931955-Flats_-_Heels.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/15/7f1d0887-15e7-4aa6-94a9-b72a29472b681631694932004-Premium_Women-s_Footwear.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/15/e96f8e03-cea2-4e4b-83a7-c78972d746811631694931893-Budget_Buy_Footwear_.jpg"></img>
                <img className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/15/aa795e50-f640-498b-ac51-46ecf2a750c41631694931995-Premium_Sneakers.jpg"></img>
            </div>
            <img className="topstyleimg" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/c32fae46-2a4c-4a5e-b07c-11ab03e33e661633002452308-Top-Styles-For-You.jpg"></img>
            <div className="tenthrow">

                <img style={{ height: "226px" }} className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/28/fff19840-7631-42d9-abe1-3693370a84701632830730854-iPhone-12-Pro-Max-----2.jpg"></img>
                <img style={{ height: "226px" }} className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/28/a5ec63c0-1f64-4560-830f-78d8a0559d761632814157969-iPhone-12-Pro-Max-----3.jpg"></img>
                <img style={{ height: "226px" }} className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/28/f6fe7195-fd4c-4e4f-b978-68b777b10a8f1632830730866-iPhone-12-Pro-Max-----4.jpg"></img>
                <img style={{ height: "226px" }} className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/28/ea5af6b5-a9a7-4542-901e-ce69858398701632814157975-iPhone-12-Pro-Max-----4.jpg"></img>
                <img style={{ height: "226px" }} className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/28/bfcd66bf-659c-4cdb-9d9d-2b57a06e39331632830730906-iPhone-12-Pro-Max-----11.jpg"></img>
            </div>
            <div className="eleventhrow" style={{ marginTop: "0px" }}>
                <img style={{ height: "226px" }} className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/28/96ac252b-ae27-423a-9499-ab342e2874141632814157990-iPhone-12-Pro-Max-----6.jpg"></img>
                <img style={{ height: "226px" }} className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/28/03d35ebf-8eba-462e-866d-305c80908d751632814157996-iPhone-12-Pro-Max-----7.jpg"></img>
                <img style={{ height: "226px" }} className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/28/7e2c4e94-e4b3-458c-b863-9b4da6487eaf1632814158003-iPhone-12-Pro-Max-----8.jpg"></img>
                <img style={{ height: "226px" }} className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/28/71701da1-7812-4d0f-896e-1f36e009dd121632814158009-iPhone-12-Pro-Max-----9.jpg"></img>
                <img style={{ height: "226px" }} className="cardimg" src="https://assets.myntassets.com/f_webp,w_196,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/28/1986b8d5-ca90-4bad-ae45-11af955224c91632814158015-iPhone-12-Pro-Max-----10.jpg"></img>
            </div>
            <img className="categoryimg" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/92d68f95-9a37-4f1a-9570-fc81e1bbbe411633003293304-Shop-By-Category--4-.jpg"></img>
            <div className="twlthrow">
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/317bd466-ec7b-46f9-a039-ee0b05b035421632999251884-BFF_DK_W_02.jpg" className="cardimg" style={{ width: "180px", height: "239px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/1f2afa58-f136-4ceb-8ea3-ee45b4a861af1632997228762-BFF_DK_M_03.jpg" className="cardimg" style={{ width: "180px", height: "239px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/ff749893-7d9d-430a-95df-7ac4d2cd2d161632999251905-BFF_DK_W_05.jpg" className="cardimg" style={{ width: "180px", height: "239px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/29db6874-dbfb-4e92-a0ab-5767b74db0491632999251920-BFF_DK_W_07.jpg" className="cardimg" style={{ width: "180px", height: "239px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/d425bd8d-3bfe-451f-8604-e793efea4f661632997228779-BFF_DK_M_06.jpg" className="cardimg" style={{ width: "180px", height: "239px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/06634e3b-fa20-4656-8d57-fa3cd0b49aca1632997228785-BFF_DK_M_07.jpg" className="cardimg" style={{ width: "180px", height: "239px" }}></img>
            </div>
            <div className="thirteenrow">
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/f1e9cc4d-88bb-45a0-9bc6-fce7215336dd1632997228791-BFF_DK_M_08.jpg" className="cardimg" style={{ height: "239px", width: "180px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/a3884e6c-5d6b-4e4e-8335-6c80f60641351632999251926-BFF_DK_W_08.jpg" className="cardimg" style={{ height: "239px", width: "180px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/5ec647de-07f6-49db-9703-ec768c60951f1632999251939-BFF_DK_W_10.jpg" className="cardimg" style={{ height: "239px", width: "180px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/0b323f92-2b7d-4550-93d6-23667b289ecc1632997228808-BFF_DK_M_11.jpg" className="cardimg" style={{ height: "239px", width: "180px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/d69ccb24-e534-4c47-8b7e-696888598f3c1632997228815-BFF_DK_M_12.jpg" className="cardimg" style={{ height: "239px", width: "180px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/50de35a3-0bc7-4408-ab51-67c5cf64b23a1632997228822-BFF_DK_M_13.jpg" className="cardimg" style={{ height: "239px", width: "180px" }}></img>
            </div>
            <div className="fourteenrow">
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/d5ee5945-74e1-4ed1-b0c2-191511bf006e1632997228828-BFF_DK_M_14.jpg" className="cardimg" style={{ height: "239px", width: "180px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/de127667-eaad-4161-a101-6823c1af12cc1632999251986-BFF_DK_W_15.jpg" className="cardimg" style={{ height: "239px", width: "180px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/0eca13fd-bd0e-47b0-bb6c-1766b4e2dae01632997228842-BFF_DK_M_16.jpg" className="cardimg" style={{ height: "239px", width: "180px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/3d94ed61-a9ca-47c2-b331-830a246e0f091632997228848-BFF_DK_M_17.jpg" className="cardimg" style={{ height: "239px", width: "180px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/cafe1123-cc7c-4d70-8a6c-996c7be1c4871632997228854-BFF_DK_M_18.jpg" className="cardimg" style={{ height: "239px", width: "180px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/8f8c6d8e-24b4-4611-a0f6-ca62d6d683261632997228860-BFF_DK_M_19.jpg" className="cardimg" style={{ height: "239px", width: "180px" }}></img>
            </div>
            <div className="fifteenrow">
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/5b63bf02-e91e-4c77-9849-e63bc0ef915d1632997228880-BFF_DK_M_22.jpg" className="cardimg" style={{ width: "154px", height: "250px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/b48027c5-11a7-4dbe-aee8-7b2dbc7bdc101632997228886-BFF_DK_M_23.jpg" className="cardimg" style={{ width: "154px", height: "250px" }}></img>
                <img src="https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/1a6f0bab-75f8-4738-9e5e-82b026a13a5a1632997228893-BFF_DK_M_24.jpg" className="cardimg" style={{ width: "154px", height: "250px" }}></img>
            </div>
            <div className="sidebar">
                <span className="arrow"></span>
                <span className="sidebartext">FLAT ₹500 OFF</span>
            </div>
            <div className="footercontainer">
                <div className="onlinebox">
                    <p className="headings">ONLINE SHOPPING</p>
                    <p style={{ marginTop: "23px" }}>Men</p>
                    <p>Women</p>
                    <p>Kids</p>
                    <p>Home & Living</p>
                    <p>Beauty</p>
                    <p>Gift Cards</p>
                    <p>Myntra Insider</p>
                </div>
                <div className="usefulbox" style={{ width: "162px", height: "347px" }}>
                    <p className="headings">USEFUL LINKS</p>
                    <p style={{ marginTop: "23px" }}>Contact Us</p>
                    <p>FAQ</p>
                    <p>T&C</p>
                    <p>Terms Of Use</p>
                    <p>Track Orders</p>
                    <p>Shipping</p>
                    <p>Cancellation</p>
                    <p>Returns</p>
                    <p>Whitehat</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Privacy Policy</p>
                    <p>Site Map</p>
                </div>
                <div className="expbox">
                    <p className="headings">EXPERIENCE MYNTRA APP ON MOBILE</p>
                    <img style={{ marginTop: "23px" }} className="expimg" src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"></img>
                    <img className="expimg" src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"></img>
                    <p style={{ fontSize: "12px", marginBottom: "10px", fontWeight: "500", marginTop: "20px" }}>KEEP IN TOUCH</p>
                    <img src="https://constant.myntassets.com/web/assets/img/d2bec182-bef5-4fab-ade0-034d21ec82e31574604275433-fb.png" style={{ width: "20px", height: "20px" }}></img>
                    <img className="img2" src="https://constant.myntassets.com/web/assets/img/f10bc513-c5a4-490c-9a9c-eb7a3cc8252b1574604275383-twitter.png" style={{ width: "20px", height: "20px" }}></img>
                    <img className="img2" src="https://constant.myntassets.com/web/assets/img/a7e3c86e-566a-44a6-a733-179389dd87111574604275355-yt.png" style={{ width: "20px", height: "20px" }}></img>
                    <img className="img2" src="https://constant.myntassets.com/web/assets/img/b4fcca19-5fc1-4199-93ca-4cae3210ef7f1574604275408-insta.png" style={{ width: "20px", height: "20px" }}></img>
                </div>
                <div className="originalbox">
                    <img className="ok" style={{ width: "48px", height: "40px", marginTop: "35px" }} src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"></img>
                    <span className="originaltext" ><strong>100% ORIGINAL</strong>guarantee for all products at myntra.com</span>
                    <img className="ok1" style={{ width: "48px", height: "40px" }} src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"></img>
                    <span className="originaltext1"><strong>Return within 30days</strong> of receiving your order</span>
                </div>
            </div>
        </div>

    )
}
