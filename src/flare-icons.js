'use strict';
/**
 * Visit www.flaremediaplayer.com
 * This is an icon pack for using inline svg graphics
 * WARNING This version is still experimental!
 * Visit the git repository to submit bugs
 */
var FlareDomElements = require("flare-dom-elements");
var FlareDomElementNs = FlareDomElements.BasicNs;

class FlareIcon extends FlareDomElementNs {
    constructor() {
        super("http://www.w3.org/2000/svg", "svg", "icon");
        this.renderAttributes({
        });
    }
    
    static Create(target){
        
        var domTarget;
        if (target != undefined) {
            if (typeof target === 'string') {
                domTarget = document.getElementById(target);
            } else if (typeof this.target === 'object' && this.target.nodeType === 1) {
                domTarget = target;
            }
        } else {
            domTarget = document.body;
        }
        
        var icon = new this();
        domTarget.appendChild(icon.element);
        return icon;
        
    }
}

class FlarePlayIcon extends FlareIcon {
    
    constructor() {
        super();
        this.renderAttributes({
            viewBox: "0 0 256 256",

        });

        this.playSymbol = new FlareDomElementNs("http://www.w3.org/2000/svg", "polygon");
        this.playSymbol.renderAttributes({
            points: "28.33 20.33 28.33 231.67 231 126 28.33 20.33",
            //fill : "black",

        });
        //this.indent = this.element.appendChild(document.createTextNode("\n"));
        this.addChild(this.playSymbol);
        //this.indent = this.element.appendChild(document.createTextNode("\n"));

    }
    
}

class FlarePauseIcon extends FlareIcon {
    
    constructor(fill) {
        super();
        this.renderAttributes({
            viewBox: "0 0 256 256",

        });

        this.pauseLeft = new FlareDomElementNs("http://www.w3.org/2000/svg", "path");
        this.pauseLeft.renderAttributes({
            d: "M95.77,232.75h-21c-9.37,0-17-10.15-17-22.62V45.86c0-12.47,7.63-22.61,17-22.61h21c9.37,0,17,10.14,17,22.61V210.13c0,12.47-7.63,22.62-17,22.62h0Z"
         
        });

        this.pauseRight = new FlareDomElementNs("http://www.w3.org/2000/svg", "path");
        this.pauseRight.renderAttributes({
            d: "M181.27,232.75h-21c-9.37,0-17-10.15-17-22.62V45.86c0-12.47,7.63-22.61,17-22.61h21c9.37,0,17,10.14,17,22.61V210.13c0,12.47-7.63,22.62-17,22.62h0Z"
     
        });

        this.addChild(this.pauseLeft);
        this.addChild(this.pauseRight);


    }
}

class FlareVolumeIcon extends FlareIcon{
    constructor(fill){
        super();
        
        this.renderAttributes({
            viewBox: "0 0 256 256",

        });
        
        this.vol3 = new FlareDomElementNs("http://www.w3.org/2000/svg", "path");
        this.vol3.renderAttributes({
            d: "M171.88,204.38A6.92,6.92,0,0,1,167,192.56a99,99,0,0,0,0-139.8A6.92,6.92,0,0,1,176.77,43a112.84,112.84,0,0,1,0,159.38,6.9,6.9,0,0,1-4.89,2h0Z"
         
        });
        
        this.vol2 = new FlareDomElementNs("http://www.w3.org/2000/svg", "path");
        this.vol2.renderAttributes({
            d: "M153.36,185.87a6.92,6.92,0,0,1-4.89-11.82,72.76,72.76,0,0,0,0-102.8,6.92,6.92,0,1,1,9.79-9.79,86.62,86.62,0,0,1,0,122.37,6.9,6.9,0,0,1-4.89,2h0Z"
         
        });
        
        this.vol1 = new FlareDomElementNs("http://www.w3.org/2000/svg", "path");
        this.vol1.renderAttributes({
            d: "M133.31,165.83A6.92,6.92,0,0,1,128.42,154a44.31,44.31,0,0,0,0-62.69,6.92,6.92,0,0,1,9.79-9.79,58.15,58.15,0,0,1,0,82.27,6.9,6.9,0,0,1-4.89,2h0Z"
         
        });
        
        this.speaker = new FlareDomElementNs("http://www.w3.org/2000/svg", "path");
        this.speaker.renderAttributes({
            d: "M108,187.1a6.9,6.9,0,0,1-4.33-1.52L72,160.2H52.47a6.92,6.92,0,0,1-6.92-6.92V92.05a6.92,6.92,0,0,1,6.92-6.92H72L103.7,59.74A6.92,6.92,0,0,1,115,65.14v115A6.92,6.92,0,0,1,108,187.1h0ZM59.39,146.36h15a6.92,6.92,0,0,1,4.33,1.52l22.35,17.89V79.54L78.73,97.45A6.89,6.89,0,0,1,74.41,99h-15v47.38h0Z"
         
        });
        
        this.mute1 = new FlareDomElementNs("http://www.w3.org/2000/svg", "path");
        this.mute1.renderAttributes({
            d: "M194,164.15a7,7,0,0,1-4.95-2.05l-59.38-59.38a7,7,0,0,1,9.89-9.89L199,152.21A7,7,0,0,1,194,164.15h0Z",
            opacity : 0
        });
        this.mute2 = new FlareDomElementNs("http://www.w3.org/2000/svg", "path");
        this.mute2.renderAttributes({
            d: "M135,164.56a7,7,0,0,1-5-11.88l58.56-60.2a7,7,0,0,1,10,9.76l-58.56,60.2a7,7,0,0,1-5,2.12h0Z",
            opacity : 0
        });
        
        this.addChild(this.vol3);
        this.addChild(this.vol2);
        this.addChild(this.vol1);
        this.addChild(this.speaker);
        this.addChild(this.mute1);
        this.addChild(this.mute2);
    }
    
    /**
     * 
     * @param {type} volume float between 0 and 1
     */
    setVolume(volume){
     
        var intensity3;
        var intensity2;
        var intensity1;
        var muteIntensity;
        
        if(volume >= 0.67){
            
            intensity3 = (volume - 0.67)/0.33;
            intensity2 = 1;
            intensity1 = 1;
            muteIntensity = 0;
            
        }else if(volume >= 0.34){
            intensity3 = 0;
            intensity2 = (volume - 0.34)/0.33;
            intensity1 = 1;
            muteIntensity = 0;
            
        }else if (volume >0){
            intensity3 = 0;
            intensity2 = 0;
            intensity1 = volume/0.33;
            muteIntensity = 0;
            
        }else{
            intensity3 = 0;
            intensity2 = 0;
            intensity1 = 0;
            muteIntensity = 1;
            
        }
        
        this.vol1.renderAttributes({
            opacity : intensity1
        });
        
        this.vol2.renderAttributes({
            opacity : intensity2
        });
        
        this.vol3.renderAttributes({
            opacity : intensity3
        });
        
        this.mute1.renderAttributes({
            opacity : muteIntensity
        });
        
        this.mute2.renderAttributes({
            opacity : muteIntensity
        });
        
    }
}

class FlareLoadingIcon extends FlareIcon{
    constructor(){
        super();
        this.degree = 0;
        this.renderAttributes({
            viewBox: "0 0 256 256",

        });

        this.gear = new FlareDomElementNs("http://www.w3.org/2000/svg", "path");
        this.gear.renderAttributes({
            d: "M138.47,223.76H117.53a13.88,13.88,0,0,1-13.86-13.86V196.35l-6.49-2.52-9.87,9.3a14.21,14.21,0,0,1-19.59,0L52.89,188.3a13.84,13.84,0,0,1,0-19.61l9.55-9.56-2.8-6.42-13.56-.37a13.88,13.88,0,0,1-13.86-13.86v-21A13.88,13.88,0,0,1,46.1,103.66H59.67l2.52-6.49-9.3-9.88a13.84,13.84,0,0,1,0-19.61L67.7,52.88a14.22,14.22,0,0,1,19.61,0l9.57,9.57,6.38-2.81,0.4-13.55a13.88,13.88,0,0,1,13.86-13.86h20.95a13.89,13.89,0,0,1,13.88,13.86V59.66l6.49,2.52,9.85-9.3a13.8,13.8,0,0,1,9.8-4.05h0a13.8,13.8,0,0,1,9.81,4l14.82,14.84a13.87,13.87,0,0,1,0,19.61l-9.57,9.56,2.82,6.39,13.56,0.39a13.87,13.87,0,0,1,13.85,13.86v21a13.87,13.87,0,0,1-13.85,13.86H196.35l-2.53,6.51,9.3,9.86a13.86,13.86,0,0,1,0,19.61l-14.77,14.8a14.21,14.21,0,0,1-19.59,0l-9.61-9.6-6.38,2.81-0.38,13.54a13.89,13.89,0,0,1-13.88,13.86h0ZM120,207.46h16.09V196.35a16.73,16.73,0,0,1,11-15.25l5.6-2.33a14.9,14.9,0,0,1,6.45-1.35A16.39,16.39,0,0,1,170.64,182l7.86,7.86,11.37-11.38L182,170.65a16.72,16.72,0,0,1-3-18.55l2.29-5.6c1.88-5.72,8.44-10.46,15.06-10.46h11.11V120H196.35a16.7,16.7,0,0,1-15.27-11l-2.32-5.56c-2.69-5.37-1.42-13.33,3.23-18l7.88-7.87L178.51,66.13,170.64,74a17,17,0,0,1-18.56,3l-5.59-2.29c-5.71-1.89-10.44-8.45-10.44-15V48.54H120V59.66a16.69,16.69,0,0,1-11,15.25l-5.57,2.33a15,15,0,0,1-6.46,1.36A16.35,16.35,0,0,1,85.36,74l-7.85-7.85L66.14,77.5,74,85.36a16.73,16.73,0,0,1,3,18.55l-2.26,5.58C72.83,115.24,66.27,120,59.67,120H48.54V136H59.67a16.73,16.73,0,0,1,15.26,11l2.32,5.63c2.69,5.36,1.4,13.33-3.25,18l-7.86,7.86,11.37,11.37L85.36,182a16.94,16.94,0,0,1,18.56-3l5.59,2.28c5.84,1.94,10.46,8.36,10.46,15.06v11.11h0Zm8-43.69A35.77,35.77,0,1,1,163.77,128,35.8,35.8,0,0,1,128,163.77h0Zm0-55.23A19.47,19.47,0,1,0,147.47,128,19.48,19.48,0,0,0,128,108.53h0Z"
         
        });


        this.addChild(this.gear);

    }
    
    rotate(degree){
        this.degree = (this.degree + degree) % 360;
        this.gear.renderAttributes({
           transform: "rotate("+  this.degree + " , 128 , 128 )"
         
        });
    }

}


if (process.env.MODE === "global") {
    
    window.Flare = window.Flare || {};
    window.Flare.FlarePlayIcon = FlarePlayIcon;
    window.Flare.FlarePauseIcon = FlarePauseIcon;
    window.Flare.VolumeIcon = FlareVolumeIcon;
    window.Flare.LoadingIcon = FlareLoadingIcon;

} else {
    
    module.exports.FlarePlayIcon = FlarePlayIcon;
    module.exports.FlarePauseIcon = FlarePauseIcon;
    module.exports.VolumeIcon = FlareVolumeIcon;
    module.exports.LoadingIcon = FlareLoadingIcon;

}
