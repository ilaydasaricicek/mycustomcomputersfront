import React from 'react';
import "./Hero.css";
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    let navigate = useNavigate()

  return (
    <div>
        <div class="background--image1">
        <div class="heading-container">
            <span class="heading-container__heading">MyCustomComputers</span>
        </div>
    </div>
    <section class="section section--light">
        <h2>MONSTER TULPAR</h2>
        <p >Monster Tulpar , olağanüstü performansı ve üstün özellikleriyle göz kamaştırıyor. Güçlü işlemcisi, yüksek hızlı RAM'i ve geniş depolama kapasitesi sayesinde en yoğun görevlerle bile başa çıkabilme gücüne sahip. Aynı zamanda etkileyici bir grafik kartıyla donatılan Tulpar, oyun ve grafik tasarım gibi alanlarda da üst düzey bir performans sunuyor. Şık ve dayanıklı tasarımıyla da dikkat çeken Monster Tulpar, kullanıcılarına iş ve eğlenceyi bir arada sunan mükemmel bir deneyim sağlıyor. </p>
    </section>
    <div class="background--image2">
        <div class="heading-container">
        <span style={{cursor:"pointer"}} onClick={()=>navigate('/product')} class="heading-container__heading">ÜRÜNLERİMİZ</span>
        </div>
    </div>
    <section class="section section--dark">
        <h2>MONSTER ABRA</h2>
        <p>Monster Abra , olağanüstü performansı ve üstün özellikleriyle göz kamaştırıyor. Güçlü işlemcisi, yüksek hızlı RAM'i ve geniş depolama kapasitesi sayesinde en yoğun görevlerle bile başa çıkabilme gücüne sahip. Aynı zamanda etkileyici bir grafik kartıyla donatılan Abra, oyun ve grafik tasarım gibi alanlarda da üst düzey bir performans sunuyor. Şık ve dayanıklı tasarımıyla da dikkat çeken Monster Abra, kullanıcılarına iş ve eğlenceyi bir arada sunan mükemmel bir deneyim sağlıyor.</p>
    </section>
    <div class="background--image3">
        <div class="heading-container">
            <span class="heading-container__heading">EŞSİZ TECRÜBE</span>
        </div>
    </div>
    <section class="section section--light">
        <h2>MSI CYBORG 15</h2>
        <p>MSI CYBORG 15, olağanüstü performansı ve üstün özellikleriyle göz kamaştırıyor. Güçlü işlemcisi, yüksek hızlı RAM'i ve geniş depolama kapasitesi sayesinde en yoğun görevlerle bile başa çıkabilme gücüne sahip. Aynı zamanda etkileyici bir grafik kartıyla donatılan Abra, oyun ve grafik tasarım gibi alanlarda da üst düzey bir performans sunuyor. Şık ve dayanıklı tasarımıyla da dikkat çeken MSI CYBORG 15, kullanıcılarına iş ve eğlenceyi bir arada sunan mükemmel bir deneyim sağlıyor.</p>
    </section>
    </div>
    
  )
}

export default Hero