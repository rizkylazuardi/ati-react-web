const captchaRenderer = {
    init(id,funcGenerate,funcSuccess,funcFailure) {
        this.captchaCntr = document.getElementById(id);
        // No Container No Captcha
        if (!this.captchaCntr) {
            return;
        }

        this.canvasContainer = document.getElementById(`${id}-canvas-container`);
        this.inputContainer = document.getElementById(`${id}-input-container`);
        this.refreshContainer = document.getElementById(`${id}-refresh-container`);
        this.submitContainer = document.getElementById(`${id}-submit-container`);

        this.canvas = document.createElement('canvas');
        this.input = document.createElement('input');
        this.submit = document.createElement('button');
        this.refresh = document.createElement('button');

        this.setupCanvas(id);
        this.setupTB(id,funcGenerate,funcSuccess,funcFailure);

        this.generatePasscode(funcGenerate);
        this.setPasscode();

        this.render();
    },
    setupCanvas(id) {
        this.ctx = this.canvas.getContext('2d');
        this.canvas.id = id+'canvas';
        this.canvas.width = this.canvasContainer.clientWidth;
        this.canvas.height = 75;
    },
    setupTB(id,funcGenerate,funcSuccess,funcFailure) {
        this.input.type = 'text';
        this.input.id = id+'text';
        this.input.className = 'form-control';
        this.input.placeholder = 'Enter Captcha';
        this.setupButton(id,funcGenerate,funcSuccess,funcFailure);
    },
    setupButton(id,funcGenerate,funcSuccess,funcFailure) {
        this.submit.id = id+'submit';
        this.submit.className = 'btn btn-info btn-block';
        this.submit.innerHTML  = 'Submit Captcha';
        this.refresh.id = id+'refresh';
        this.refresh.className = 'btn btn-warning btn-block';
        this.refresh.innerHTML  = 'Refresh Captcha';
        this.bindTBEvents(funcGenerate,funcSuccess,funcFailure);
    },
    bindTBEvents(funcGenerate,funcSuccess,funcFailure) {
        const that = this;
        this.submit.onclick = function() {
            if (that.input.value === that.passcode) {
                that.onSuccess(funcSuccess);
            } else {
                that.onFailure(funcFailure,funcGenerate);
            }
        };
        this.refresh.onclick = function() {
            that.onRefresh(funcGenerate);
        };
    },
    onRefresh(funcGenerate) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.generatePasscode(funcGenerate);
        this.setPasscode();
    },
    onSuccess(funcSuccess) {
         if (funcSuccess === undefined || funcSuccess === null) {
            console.log('Success');
         } else {
            funcSuccess();
         }
    },
    onFailure(funcFailure,funcGenerate) {
        if (funcFailure === undefined || funcFailure === null) {
            console.log('Failure');
         } else {
            funcFailure();
         }

         this.onRefresh(funcGenerate);
    },
    generatePasscode(funcGenerate) {
        if (funcGenerate === undefined || funcGenerate === null) {
            const passcode = Math.random().toString(36).substring(7);
            this.passcode = (+new Date()) % 2 === 0 ? passcode.toLowerCase() : passcode.toUpperCase();
        } else {
            const passcode = funcGenerate();
            this.passcode = passcode;
        }
    },
    randomColor() {
        // https://stackoverflow.com/a/7665485/1015046
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    },
    skinText(str, x, y) {
        // https://stackoverflow.com/a/7665485/1015046
        for (var i = 0; i <= str.length; ++i) {
            var ch = str.charAt(i);
            this.ctx.fillStyle = this.randomColor();
            this.ctx.fillText(ch, x, y);
            x += this.ctx.measureText(ch).width;
        }
    },
    setPasscode() {
        this.ctx.font = '48px serif';
        this.skinText(this.passcode, 50, 50);
    },
    render() {
        this.canvasContainer.appendChild(this.canvas);
        this.inputContainer.appendChild(this.input);
        this.refreshContainer.appendChild(this.refresh);
        this.submitContainer.appendChild(this.submit);
    }
};

export default captchaRenderer;