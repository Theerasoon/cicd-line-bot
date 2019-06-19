'use strict'

const MasterDailog = use('App/Helper/BotModule/Dialog/Base/MasterDialog')
const ImageGameMainMenuDialog = use('App/Helper/BotModule/Dialog/Custom/ImageGameMainMenuDialog')

class MainMenuDialog extends MasterDailog {
    constructor(user, message, session, LineClient) {
        super(user, message, session, LineClient)
        this.create()
    }

    nlu () {
        if (this.message.type !== 'text') {
            return 'default'
        }
        if (!this.message.text.includes('ตึลตึล')) {
            return 'default'
        }
        if (this.message.text.includes('เกมทายภาพ')) {
            return 'image_game'
        }
        return 'default'
    }

    create () {
        this.onText('image_game', async () => {
            this.response = [
                {
                    "type": "flex",
                    "altText": "Flex Message",
                    "contents": {
                        "type": "bubble",
                        "direction": "ltr",
                        "header": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                {
                                    "type": "spacer"
                                },
                                {
                                    "type": "text",
                                    "text": "สวัสดี วันนี้อยากทำอะไร ?",
                                    "size": "lg",
                                    "align": "start",
                                    "weight": "bold",
                                    "color": "#FFFFFF"
                                },
                                {
                                    "type": "spacer",
                                    "size": "xs"
                                }
                            ]
                        },
                        "footer": {
                            "type": "box",
                            "layout": "vertical",
                            "spacing": "none",
                            "contents": [
                                {
                                    "type": "button",
                                    "action": {
                                        "type": "message",
                                        "label": "สร้างเกมใหม่",
                                        "text": "ตึลตึลขอสร้างเกมใหม่"
                                    },
                                    "height": "sm"
                                },
                                {
                                    "type": "button",
                                    "action": {
                                        "type": "message",
                                        "label": "ดูเกมของฉัน",
                                        "text": "ตึลตึลขอดูเกมของฉัน"
                                    },
                                    "height": "sm",
                                    "gravity": "center"
                                }
                            ]
                        },
                        "styles": {
                            "header": {
                                "backgroundColor": "#00A6ED"
                            },
                            "footer": {
                                "backgroundColor": "#F1F1F1"
                            }
                        }
                    }
                }
            ]
            this.next_dialog = 'ImageGameMainMenuDialog'
            return null
        })

        // this.onImage(async () => {
        //   this.response.push({
        //     type: 'text',
        //     text: 'process image'
        //   })
        // })

        // this.onTextDefault(async () => {
        //     const response = [
        //         { type: 'text', text: 'ไม่มี response' }
        //     ]
        //     this.response = response
        //     return null
        // })
    }

}

module.exports = MainMenuDialog
