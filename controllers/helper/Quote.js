module.exports = {
  getRandomQuote : function () {
    const quote = [
      'เคาท์ดาวน์ให้นับถอยหลัง เค้ารักเธอจังให้นับวันขอเป็นแฟน',
      'เคาท์ดาวน์จะมีแค่สิ้นปี เค้ารักแกนะคนดีจะมีตลอดไป',
      'มีปากก็พูดไป มีใจก็พูดมา นั้นใครเดินเข้ามา นั้นลาเดินเข้าไป',
      'ลูกโป่งที่เราให้ไม่ใช่ลูกโป่งธรรมดานะ เพราะข้างในมันคือลมหายใจของเรา',
      'จะโสดจนตายให้ผู้ชาบเสียดายเล่น แต่ถ้าเจอคนหล่อตัวเป็นๆ ถือว่าเมื่อกี๊พูดเล่นก็แล้วกัน',
      'รูปภาพผมเก็บไว้ในฮาทดิสก์ แต่รูปคุณผมเก็บไว้ใน This heart',
      'ที่ใจสั่นทุกวันนี้ ไม่รู้เป็นเพราะกาแฟ หรือ แกฟ่ะ',
      'ภาพบางภาพมันเบลอ แต่ภาพเธอต่อให้หลับตาก็ยังชัดเจน',
      'สึนามิอยู่ตั้งไกล แต่ทำไมหัวใจเกิดAftershock เวลาอยู่ใกล้เธอ',
      'หน้าหนาวอะปากแตก น่าแด(ร)กอะปากเธอววว์',
      'เขาค้อที่ว่าหนาว ยังไม่หนาวเท่าเขาไม่ง้อ',
      'แฟนไม่รักให้ทักแชทมาหาพี่ แฟนไม่มีให้เรียกพี่ว่าที่รัก',
      'นอกบ้านอะเคยไป แต่นอกใจนี่ไม่เคยมี',
      'จะไม่ทำดีเพื่อนเอาหน้า แต่จะทำทุกท่าเพื่อให้ลูกออกมาหน้าตาดี',
      'ตอนนี้มีแฟนแล้วแต่เราอยู่ไกลกัน เราอยู่ปัจจุบัน ส่วนเขาอยู่อนาคต',
      'ถึงเบย์แม็กซ์เค้าจะเป็นฮีโร่ตัวนุ่มฟู แต่ผมจะเป็นเนื้อคู่ที่นุ่มนวล',
      'รักเรียนอาจจะมีความรู้ แต่ถ้ารักหนูอาจจะมีความรัก',
      'ปีนี้ทุกคนบอกเหตุการณ์ไม่ค่อยดี แต่ผมกลับแฮปปี้ทุกๆทีที่มีคุณ',
      'ลักทรัพย์ ทั้งจำ ทั้งปรับ แต่รักคุณนะครับ ทั้งจับ ทั้งคลำ',
      'สโนไวท์ยังมีคนแคระ แต่รักนะแจ้ะจะมีแค่เธอนะจ้ะ',
      'ลงทุนธุรกิจหวังผลกำไร แต่ถ้าลงทุนหัวใจอ่ะหวังใครสักคน',
      'เมิงออนตูรีบทักแต่เมิงเผือกถอดปลั๊กแล้วไปนอน',
      'ไม่ต้องเก่งเคมีมากมาย ก็รู้ว่าตัวทำละลายใจเราคือเธอ',
      'อยากติดตามต้องกดปุ่ม follower ถ้าอยากเป็นแฟนเธอต้องกดปุ่มไหน',
      'ถึงเราจะไม่ใช่เด็กช่าง แต่ถ้าใจเธอพังเราช่วยซ่อมให้ได้',
      'อ่านหนังสือ10รอบ ไม่เคยจำ เจอหน้าเธอ 1 ครั้ง จำไม่เคยลืม',
      'บริการให้กอดฟรี บริการไมดีให้กอดคืน',
      'กระปุกออมสินมีไว้หยอดตังค์ คิดถึงจังเอาไว้หยอดเธอ',
      'ขับรถระวังหลับใน นอกใจระวังหลับยาว',
      'อยากเห็นผีให้ไปบ้านร้าง แต่ถ้าอยากหนีความอ้างว่างให้มาบ้านพี่นะครัช',
      'ห่วงยางอ่ะมีรู แต่ห่วงยูต้องทำไง',
      'A-Z ชอบตัวไรไม่รู้ แต่ตัว I ชอบตัว U นะรู้ยัง',
      'รักนะคะเป็นชื่อเพลง แต่รักนะตะเองเป็นคำบอกเธอ',
      'มุขเสี่ยวคิดไม่ทันคิดถึงเธอก่อนแล้วกันมันง่ายดี',
      'ที่ตั้งใจเรียนเพราะอยากมีอนาคต แต่ที่รักเธอไม่ลดเพราะอยากมีอนาคตกับเธอ',
      'เดือนธันวาคือเดือนสุดท้ายของปี แต่เธอคนดีคือคนสุดท้ายของใจ',
      'ในละครมีตัวร้าย แต่ในอกข้างซ้ายมีเธอนะจ้ะ',
      'ถึงรัฐบาลจะหมดความชอบธรรม แต่เรานั้นไม่เคยหมดความชอบเธอ',
      'อยากมีความรู้ต้อง open house อยากมีสองเราต้อง open heart',
      'ทำผิดยังโดนลงโทษแล้วถ้ารักเธอโคตรๆนี่โดนอะไร',
      'ถ้าเธอเหนื่อยพร้อมจะเป็นที่ซบ ถ้าเธออยากคบเราพร้อมเป็นที่รัก',
      'ซานต้าคลอสยังมีเครา คำว่าเราก็ต้องมีกัน',
      'หน้าเราคล้ายกันอ้ะ คล้ายกันได้มบ..คบกันได้มั้ย',
      'ไปชลบุรีแล้วอยากเปียกฝน เพราะจะได้เป็นไข้ที่ชล คนที่ใช่',
      'ยุงกัดให้ตบอยากคบให้บอก',
      'กระต่ายยังอยู่บนดวงจันทร์ แล้วเมื่อไหร่คนอย่างฉันจะได้ไปอยู่ในใจเธอ',
      'ปีเก่ากำลังจะผ่านไป คนมีใจเมื่อไหร่จะผ่านมา',
      'พร้อมรบไม่บ่อยนัก แต่พร้อมรัก 24ชั่วโมงนะ',
      'เข้าโรงหนังงดใช้โทรศัพท์ แต่ถ้าเข้าใจเราปั๊บ งดมีคนอื่น',
      'ถ้าพิมพ์แชทไม่ถนัด พิมพ์เบอร์สิบหลักเธอมาก็ได้',
      'การบินไทยรักคุณเท่าฟ้า คนธรรมดารักคุณเท่าเดิม',
      'อยากมีแฟนเรียนสถาปัตถ จะได้มีรักที่ออกแบบได้',
      'หน้าที่ของทหารคือรักษาอธิปไตย หน้าที่ของหัวใจคือการรักใครสักคน',
      'เรียนวิชาการอาจจะเหนื่อย เรียนรู้กันไปเรื่อยๆอาจจะชัด',
      'อยากได้เงินให้ไปขอพ่อแม่ อยากได้รักแท้ให้พ่อแม่มาขอเรา',
      'รักชาติให้ยืนตรง ถ้าอยากรักมั่นคงให้มายืนข้างๆกัน',
      'อยากเป็นไข่ให้เธอเจียวเพราะคนใดที่ถูกเจียวจะเป็น คนเดียวที่ถูกใจ',
      'ไม่มีคิ้วเราไม่กลัว ไม่มีตัวเค้าอยู่ไม่ได้',
      'ข้อสอบต้องมีโจทย์ แต่ถ้าโสดต้องมีเธอ',
      'เพราะอากาศเปลี่ยนแปลงบ่อย เลยต้องอ่อยให้เธอมาดูแล',
      'ถ้านอนดึกแล้วมันเหงา ลองมานอนข้างๆเรารับรองอุ่นใจ',
      'โรคประจำตัว ไม่ปวดหัวก็เป็นไข้ โรคประจำใจ ไม่ห่วงใยก็คิดถึง',
      'ใส่สูทแล้วจะดูดี แต่ถ้าใส่ใจพี่แล้วจะรักนานๆ',
      'เป็นนักเรียนต้องตัดผม ถ้าเขาและเธอเหมาะสม คนอย่างผมคงต้องตัดใจ',
      'เธอไม่ใช่ทางผ่าน แต่เธอเป็นด่านที่เราต้องหยุด',
      'คริสต์มาสอ่ะมีแค่ครั้งละปี แต่ถ้าคุณอยากคิสมีมีได้ทุกปีและทุกวัน',
      'มีแผนที่ไว้กันหลงทาง แล้วมีอะไรบ้างไว้กันหลงเธอ',
      'ทำข้อสอบไม่ได้เพราะไม่มีคงามรู้ เหมือนชีวิตคู่ที่ไม่มีคนรัก',
      'ซานต้าครอสมาพร้อมกวาง ไม่อยากอ้างว้างมาพร้อมเรา',
      'เรื่องสมการต้องย้ายข้าง แต่พอเป็นเรื่องเธอบ้างอยากอยู่ข้างๆไม่ย้ายไปไหน',
      'ฟุตบอลแข่งกัน 90 นาที เราลองมาแข่งเป็นแฟนกันสัก 90 ปีดีม้ะ',
      'เรื่องคิดเลขอ่ะเกรดหนึ่ง เรื่องคิดถึงอ่ะเกรดสี่',
      'อยากรวยต้องลงทุน อยากสร้างอนาคตกับคุณต้องทำไง',
      'ปีใหม่นี้มีคนไปเที่ยวเป็นเพื่อนป่าว ถ้ามีแล้วเดี๋ยวเราไปเป็นแฟนให้ก็ได้',
      'จะบอกว่าหนาวกลัวหาว่าหยอด จะบอกว่าอยากกอดก็ตรงไป',
      'ค้อนมีไว้ทุบ รักนะจุ๊บๆมีไว้บอกเธอ',
      'ข้ามถนนต้องใช้ทางม้าลาย ถ้าอยากข้ามความเดียวดายให้แอดline มาหาเรา',
      'เชียร์บอลให้ส่งเสียง อยากได้คนข้างเคียงให้ส่งใจ',
      'หนาวนี้กอดใคร หนาวมั้ยกอดกัน',
      'หนาวแล้วให้ผิงไฟ ถ้าหนาวใจให้มาซบเรา',
      'แอบส่องเธอเป็นสิบรอบ เพราะคำว่าชอบแค่คำเดียว',
      'คิตตี้ อาจเป็นแมว แต่คิดถึงแล้ว อาจเป็นเธอ',
      'สอบ GATPAT ชนะคนนับแสนแล้วได้เข้ามหาลัย งั้นต้องชนะใครแล้วจะได้เข้าไปในใจเธอ',
      'ซานต้าครอสอะให้แค่ขนม แต่ถ้าคบกับผมผมให้ทั้งขนมและหัวใจ',
      'เจ้าชู้ในวันที่ไม่มีใคร แต่ไม่เคยนอกใจเวลามีแฟน',
      'จะเรียกว่าตกหลุมรักได้ไง ในเมื่อเราเต็มใจลงไปเอง',
      'ปีใหม่ก็งั้นๆ แต่งงานกับฉัน สุขกันกว่าเยอะ',
      'ผมเสียทรงยังเซตใหม่ได้ แต่ผมเสียคุณไป ถึงมีคนใหม่ก็ไม่เหมือนเดิม',
      'เล่นกีฬาเธอจะเพลีย แต่ถ้าได้เราเป็นเมียเธอจะมันส์',
      'ไม่รู้ว่าอนาคตของชาติอยู่ที่ใคร แต่อนาคตของใจอยู่ที่เธอ',
      'เพราะหน้าตาไม่ฟรุ้งฟริ้ง เลยถูกทิ้งให้เฟร้งฟร้าง',
      'ประเทศไทยมีหลายอำเภอ แต่ฉันสิเฮ้อ! มีเธอคนเดียว',
      'อาหารปลาต้องซากุระ แต่รักนะคะต้องซารางเฮโย',
      'อยากกินข้าวต้องใส่จาน แต่ถ้าอยากรักกันนานๆต้องใส่ใจ',
      'ถึงวันนี้เราจะไม่พร้อมสอบ แต่ผมพร้อมจะเป็นคำตอบของเธอ',
      'ต่อให้เราเช็คอินว่าตัวเราอยู่ที่ไหน แต่อยากบอกให้รู้ไว้ว่าโลเคชั่นหัวใจอยู่ที่เธอ',
      'อะเลิท แปลว่า คึกคัก อะรัก แปลว่า ฮักคุณ',
      'ยาสีฟันอ่ะต้องคอลเกต แต่ถ้าอยากมีคนพิเศษอ่ะต้อง call me',
      'ความสุขใช้ happy แต่ Anniversary ไม่รู้จะใช้กับใคร',
      'หมาอ่ะหวงก้าง แต่ที่เราอยู่ข้างๆเพราะหวงเธอ',
      'ที่สอบผ่านเพราะมีความรู้ แต่ที่ยิ้มอยู่เพราะมีความรัก',
      'ที่ตื่นสายไม่ใช่เพราะขี้เกียจ แค่อยากจำรายละเอียดตอนฝันถึงเธอ',
      'เธอมันเท้า..เท้าคนที่ใช่สำหรับเคอ',
      'อยากเป็นแว่นตาให้เธอใส่ ถึงจะไม่ได้อยู่ในใจแต่ก็อยู่ในสายตา',
      'เลิกสร้างแลนด์มาร์คในเกมเศรษฐี แล้วมาสร้างอนาคตที่ดีกับพี่ดีกว่า',
      'เจอครูต้องทำความเคารพ แต่ถ้าเจอคนที่อยากคบต้องทำไง',
      'อย่าตัดสินเราที่หน้าตา ถ้ายังไม่ลองลีลาและท่าไม้ตาย',
      'คบกับเราวันนี้ Anniversary ถึงชาติหน้า',
      'โตชิบานำสิ่งดีสู่ชีวิต แต่ถ้าโตแล้วมีเธอเป็นคู่คิดจะนำชีวิตไปเจอสิ่งที่ดี',
      'เบียร์ยังมีฟอง แล้วเมื่อไหร่น้องจะมีใจ',
      'ขนาดรักแท้ยังแพ้ใกล้ชิด แล้วทำไมคนไม่มีสิทธิ์จะคิดอะไรไม่ได้',
      'แอลกอฮอล์มีไว้เช็ดแผล กุญแจมีไว้ให้ไข ออกซิเจนมีไว้เพื่อหายใจ แล้วเมื่อไหร่จะมีใครมาเดินข้างกัน',
      'บอกเลยนะตอนนี้เมามาก...เมาแต่คำว่ารี',
      'เตียงมีไว้นอน ละครมีไว้ดู ไอมิสยูนี่ไว้ใช้กับเธอ',
      'ผู้ชายที่รักสุดคือพ่อ แต่พอเจอเธอแล้วง่อวววววคะแนนสูสี',
      'เป็นหวัดเพราะอากาศเปลี่ยนแปลง แต่หัวใจอ่อนแรงเพราะเธอเปลี่ยนไป',
      'มองหารังนกแท้ให้เลือกแบรนด์ แต่ถ้าอยากหาคนเป็นแฟนให้เลือกเรา',
      'ของขวัญหาซื้อได้ที่ห้าง คนข้างๆหาซื้อได้ที่ไหน',
      'กินเหล้ามันทำร้ายเรา แต่รักเขามันทำร้ายใจ',
      'ร่างกายต้องการเตียง พื้นที่ข้างเคียงต้องการเธอ',
      'บางครั้งเราอาจพูดแรงไป แต่ก็แรงไม่ยอมเปลี่ยนปลั๊ก รักไม่ยอมเปลี่ยนแปลงน้าฮิ้ววว',
      'รักแล้วรักเลย ไม่เคยรักเล่น เลิกรักไม่เป็น รักเล่นไม่เคย',
      'ในกระเป๋ามีแต่หนังสือ ในมือถือมีแต่รูปเธอ',
      'เรียนอ่ะอยากเลิกไวแต่รักใครไม่อยากเลิกเร็ว',
      'จะทักเราไม่ต้องคิดหน้าคิดหลังหรอก แค่คิดถึงก็พอ',
      'ไม่อิจฉาแมลงวันที่ได้อยู่ใกล้ขี้ แต่อิจฉาเอออตา อาเตอรีที่ได้อยู่ใกล้หัวใจเธอ',
      'ถึงขาจะไม่เรียว แต่รักเธอคนเดียวนะรู้ยัง',
      'กล้องไม่โฟกัสเพราะความชัดอยู่ที่เธอ ที่รูปมันเบลอเพราะเธอคือความชัดเจน',
      'ถ้าคนนั้นเขาทิ้งขว้าง ไหล่เรายังว่างนะตัวเธอ',
      'จันทร์อังคารอ่ะเป็นวัน แต่สำหรับเรานั้นขอแค่จันทร์ตรงไกล..ใจตรงกันก็พอ',
      'พูดง่าย เอาใจเก่ง ชอบอ้อน ขี้งอนบ้าง แต่ถ้าคุยด้วยรับรองไม่อ้างว้างร้อยเปอร์เซ็น',
      'กาลครั้งหนึ่งมันคือนิทาน จะทำให้รักเราเป็นตำนานต้องมีฉันกับเธอ',
      'นางฟ้าแบบเขาอะเจ้าชู้ แต่นางร้ายแบบกูอะรักเดียว',
      'อายุเท่านี้เราก็มีงานการทำนะ เพราะการคิดถึงเธอเนี้ยหัวใจทำงานตลอดเวลาเลย',
      'กอดหมอนข้างไม่ค่อยอุ่น ขอเปลี่ยนเป็นกอดคุณจะได้ไหม',
      'ภาษาอังกฤษเรียกวันว่า Day ส่วน I ก็อยากจะ Say ว่า love youuuuuu',
      'ถ้าพูดถึงมุขเสี่ยวเรามีเป็นแสน แต่ถ้าพูดถึงแฟนเรามีเป็นศูนย์',
      'อยากจะใช้เวลากับเธอแบบนี้ไปนานๆ ถึงมันจะไม่มีคำว่าตลอดกาล แต่มันก็จะเป็นความทรงจำตลอดไป',
      'ไม่อยากเป็น a ที่อยู่ข้าง b แต่อยากเป็น me ที่อยู่ข้างๆ you',
      'ในน้ำยังมีความดัน แต่ทำไมฉันยังไม่มีใคร',
      'ฟังธรรมจะรักลูกรักเมีย แต่ฟังmusketeersจะรักแค่คุณ',
      'อยากบอกว่า ฝนตกก็กางร่ม หนาวก็ห่มผ้า ปวดหัวก็กินยา ที่พูดมาไม่ได้เป็นหมอ แต่เป็นห่วง',
      'คนโสดต้องไปดูชูวิทย์ขี้ จะได้มีชีวิตคู่',
      'เดือนอ่ะมกรา ส่วนเรามากะรัก',
      'เล่นทวิตป่ะ? มารีให้หน่อยดิ  รีกันทัก...รักกันที',
      'กวนตรีนยังได้ตรีน แต่ทำไมกวนใจไม่ได้ใจมั่งอะ',
      'คนเสี่ยวอะมีทั่วไป แต่คนรักยูหมดใจมีแค่ไอคนเดียว',
      'รักของเราไม่มีมาตรฐานนะ เพราะมันไม่มีวันหมดอายุ',
      'รักดีหามจั่วรักชั่วหามเสา รักเราหามขึ้นเตียง ต่อที่ระเบียงจบที่บันได',
      'คณิตนี่ไม่เท่าไหร่ แต่คะถึงนิด(ผวน)มากมายนักไม่ถ้วน',
      'ขนาดกาแฟยังมีเบอดี้ แล้วทำไมพี่ยังไม่มีเบอร์น้อง',
      'เวลาเซลฟี่หน้าเรานี่เต็มจอ แต่ถ้าเธอบอกให้เรารอเราก็เต็มใจ',
      'ขอบคุณชาวนาที่ทำให้เรามีข้าว ขอบคุณพระเจ้าที่ทำให้เรามีเธอ',
      'ไม่อยากมีใครไว้กอดแค่หน้าหนาว แต่อยากมีไว้ให้กอดแบบยาวยาวไม่ว่าจะฤดูไหนๆ',
      'เรามัยเชย...เชยเธอจังลอบ ชอบเธอจังเลยยยยย',
      'อยากเป็นหมออ่ะ เพราะที่ผ่านมาไม่เคยรักษาใครไว้ได้เลย',
      'รักใครอย่าสนใจ past tense แค่ทำ present ให้มัน perfect',
      'อยากจะวางโทรศัพท์ แล้วไปจับมือเธอแทน',
      'ต้นไม้อะมีใบ ข้างๆหัวใจเรามีเธอ',
      'ถ่ายเทความร้อนต้องใช้ตัวกลาง ถ่ายเทความรักให้เธอบ้างไม่ต้องใช้ตัวกลางก็ผ่านไปถึงใจ',
      'ดูบอลผมก็ลุ้น ดูหน้าคุณผมก็รัก',
      'ใต้คางยังมีเหนียง แต่ข้างเคียงยังไม่มีใคร'
    ]
    return quote[Math.floor(Math.random() * quote.length)]
  }
}
