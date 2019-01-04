module.exports = {
  getRandomQuestion : function () {
    let questions = [{
      'level': 1,
      'type' : 'text',
      'question' : 'ทวีปใดมีขนาดใหญ่ที่สุดในโลก',
      'choice': ['เอเซีย','อเมริกา','แอฟริกา','ยุโรป'],
      'answer': 'เอเซีย'
    },{
      'level': 1,
      'type' : 'text',
      'question' : 'คำใดไม่ใช่คำประสม',
      'choice': ['ลมพัด','ไฟฟ้า','ราชวัง','รถเก๋ง'],
      'answer': 'ลมพัด'
    },{
      'level': 1,
      'type' : 'text',
      'question' : 'สีน้ำเงินผสมกับสีเหลืองได้สีอะไร',
      'choice': ['สีเขียว','สีแดง','สีม่วง','สีส้ม'],
      'answer': 'สีเขียว'
    },{
      'level': 1,
      'type' : 'text',
      'question' : 'ข้อใดไม่ใช่สัตว์เลี้ยงลูกด้วยนม',
      'choice': ['ซาลาแมนเดอร์','สิงโต','วอลรัส','จิงโจ้'],
      'answer': 'ซาลาแมนเดอร์'
    },{
      'level': 1,
      'type' : 'text',
      'question' : 'มดอะไรกัดเจ็บที่สุด',
      'choice': ['มดดำ','มดแดง','มดเอ็กซ์','มดทอระยิด'],
      'answer': 'ตึลตึลขอตอบซาลาแมนเดอร์'
    },{
      'level': 1,
      'type' : 'text',
      'question' : 'ทำเลไหนไม่มีน้ำ',
      'choice': ['ทะเลทราย','ทะเลดำ','ทะเลแดง','ทะเลสาบ'],
      'answer': 'ทะเลทราย'
    },{
      'level': 1,
      'type' : 'text',
      'question' : 'ไอแซก นิวตัน ค้นพบอะไร',
      'choice': ['แรงโน้มถ่วง','คลื่นแม่เหล็ก','สนามไฟฟ้า','สนามเบสบอล'],
      'answer': 'แรงโน้มถ่วง'
    },{
      'level': 1,
      'type' : 'text',
      'question' : 'เดอะทอยส์ก๊อบปี้วงอะไร',
      'choice': ['1975','1976','1977','ก๊อบพ่อมึง'],
      'answer': '1975'
    },{
      'level': 1,
      'type' : 'text',
      'question' : '61 x 74 ได้เท่าไหร่',
      'choice': ['4514','4414','4524','4424'],
      'answer': '4514'
    },{
      'level': 1,
      'type' : 'text',
      'question' : 'รถไฟจะไปโคราช ตดดังป่าด ไปไหน',
      'choice': ['ราชบุรี','สระบุรี','เพรชบุรี','ผมมีเนื้อๆ'],
      'answer': 'ราชบุรี'
    },{
      'level': 1,
      'type' : 'text',
      'question' : 'บิ๊กป้อมยืมนาฬิกาจากใคร',
      'choice': ['เสี่ยคราม','บิ๊กตู่','บิ๊กจ๊ะ','เสี่ยโป้'],
      'answer': 'เสี่ยคราม'
    },{
      'level': 1,
      'type' : 'text',
      'question' : 'ท่อนแร๊พเพลง ก่อนฤดูฝน คือ',
      'choice': ['ฉันเองก็ไม่รู้ว่า...','ประเทศกูมี...','ยังไม่ได้นอน...','ไม่ฟังเดอะทอยส์'],
      'answer': 'ฉันเองก็ไม่รู้ว่า...'
    },{
      'level': 1,
      'type' : 'text',
      'question' : 'คำไหนสะกดถูก',
      'choice': ['กำเหน็จ','มังสวิรัต','หน้ารัก','นะค่ะ'],
      'answer': 'กำเหน็จ'
    },{
      'level': 1,
      'type' : 'text',
      'question' : 'แม่น้ำที่ใดยาวที่สุดในโลก',
      'choice': ['ไนล์','เจ้าพระยา','แยงซีเกียง','อะเมซอน'],
      'answer': 'ไนล์'
    },{
      'level': 1,
      'type' : 'text',
      'question' : 'แม่น้ำทียาวที่สุดในโลกอยู่ทวีปใด',
      'choice': ['แอฟริกา','อเมริกาใต้','เอเชีย','ออสเตเรีย'],
      'answer': 'แอฟริกา'
    }]

    let question = questions[Math.floor(Math.random() * questions.length)]
    this.shuffle(question.choice)
    return question

  },
  shuffle : function(array) {
    let counter = array.length
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter)
        // Decrease counter by 1
        counter--
        // And swap the last element with it
        let temp = array[counter]
        array[counter] = array[index]
        array[index] = temp
    }
    return array
  }
}
