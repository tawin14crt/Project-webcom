const products = {
            arabica: {
                productname: "Arabica Coffee Beans",
                productdescription: "รสชาติซับซ้อน กรดนุ่ม",
                smallname:"Arabica Coffee Beans",
                smalldes:"รสชาติซับซ้อน กรดนุ่ม",
                productimg: "../image/Product/arabicaSeeds.webp",
                productprice: 250,
                productstock: 6
            },
            robusta: {
                productname: "Robusta Green Coffee Beans",
                productdescription: "รสชาติขมฝาดลึก คาแฟอีนสูง",
                smallname:"Robusta Green Beans",
                smalldes:"รสชาติขมฝาดลึก คาแฟอีนสูง",
                productimg: "../image/Product/robusta-green-coffee-beans-500x500.webp",
                productprice: 220,
                productstock: 10
            },
            geisha: {
            productname: "Panama Geisha Esmeralda",
            productdescription: "กาแฟสายพันธุ์เกอิชาจากปานามา หอมกลิ่นดอกไม้และผลไม้ตระกูลซิตรัส เปรี้ยวสว่าง คล้ายชา",
            smallname: "Panama Geisha",
            smalldes: "หอมดอกไม้ เปรี้ยวสว่าง",
            productimg: "../image/Product/Panama-Esmeralda-Geisha-1500-Washed-7.jpg",
            productprice: 1200,
            productstock: 3
            },
            ethiopia: {
                productname: "Ethiopia Yirgacheffe Washed",
                productdescription: "กาแฟเอธิโอเปียจากแหล่งปลูกเยอร์กาเชฟเฟ่ หอมกลิ่นมะลิและเลมอน บอดี้บางเบาดื่มง่าย",
                smallname: "Ethiopia Yirgacheffe",
                smalldes: "หอมกลิ่นมะลิ บอดี้ชา",
                productimg: "../image/Product/ethiopia.webp",
                productprice: 450,
                productstock: 15
            },
            colombia: {
                productname: "Colombia Supremo Finca",
                productdescription: "กาแฟโคลอมเบียซูพรีโม รสชาติสมดุล โทนช็อกโกแลตและคาราเมล หวานนุ่มนวล",
                smallname: "Colombia Supremo",
                smalldes: "โทนช็อกโกแลต หวานนุ่ม",
                productimg: "../image/Product/colombia-_331_18d8a3e1-3104-46d2-b0a4-dff9c4e6d354.jpg",
                productprice: 350,
                productstock: 20
            },
            kenya: {
                productname: "Kenya AA Top Quality",
                productdescription: "กาแฟเคนย่าเกรด AA โดดเด่นด้วยความเปรี้ยวแบบเบอร์รี่และแบล็กเคอร์แรนท์ บอดี้แน่น",
                smallname: "Kenya AA Beans",
                smalldes: "เปรี้ยวเบอร์รี่ บอดี้แน่น",
                productimg: "../image/Product/kenya.jpg",
                productprice: 480,
                productstock: 8
            },
            costarica: {
                productname: "Costa Rica Tarrazu Honey",
                productdescription: "กาแฟคอสตาริกาโพรเซสแบบฮันนี่ หวานฉ่ำคล้ายน้ำผึ้งและผลไม้สุก กรดผลไม้ละมุน",
                smallname: "Costa Rica Tarrazu",
                smalldes: "หวานน้ำผึ้ง กรดละมุน",
                productimg: "../image/Product/castarica.jpg",
                productprice: 420,
                productstock: 12
            },
            guatemala: {
                productname: "Guatemala Antigua SHB",
                productdescription: "กาแฟกัวเตมาลาปลูกบนพื้นที่สูงภูเขาไฟ รสชาติโกโก้เข้มข้น แฝงกลิ่นเครื่องเทศเบาๆ",
                smallname: "Guatemala Antigua",
                smalldes: "โกโก้เข้ม กลิ่นสไปซ์",
                productimg: "../image/Product/Guatemala_df53238c-7cbb-48fa-b206-38dfbebfb07e_1080x.webp",
                productprice: 380,
                productstock: 10
            },
            brazil: {
                productname: "Brazil Santos Fine Cup",
                productdescription: "กาแฟบราซิลซานโตส บอดี้หนักแน่น รสโทนถั่วคั่วและช็อกโกแลต เปรี้ยวน้อย เหมาะทำเอสเปรสโซ่",
                smallname: "Brazil Santos",
                smalldes: "โทนถั่วคั่ว เปรี้ยวน้อย",
                productimg: "../image/Product/brazill.jpg",
                productprice: 280,
                productstock: 25
            },
            sumatra: {
                productname: "Sumatra Mandheling Grade 1",
                productdescription: "กาแฟอินโดนีเซียสุมาตรา บอดี้หนามาก กลิ่นเอิร์ธโทนและสมุนไพร ความเปรี้ยวต่ำ",
                smallname: "Sumatra Mandheling",
                smalldes: "บอดี้หนา กลิ่นสมุนไพร",
                productimg: "../image/Product/IndonesiaSumatraGayo_0797fd4b-0c96-4323-a89c-dc9bedb4efe4.webp",
                productprice: 320,
                productstock: 14
            },
            doichang: {
                productname: "Thailand Doi Chang Peaberry",
                productdescription: "กาแฟเมล็ดโทนจากดอยช้าง คั่วกลาง หอมหวานคาราเมลและผลไม้ รสชาติกลมกล่อมและซับซ้อน",
                smallname: "Doi Chang Peaberry",
                smalldes: "หวานคาราเมล เมล็ดโทน",
                productimg: "../image/Product/AW_กาแฟเชียงราย_01.jpg",
                productprice: 300,
                productstock: 18
            },
            rwanda: {
                productname: "Rwanda Inzovu Washed",
                productdescription: "กาแฟรวันดา กลิ่นหอมดอกไม้ส้ม โทนน้ำชาดำและแอปเปิ้ลแดง เปรี้ยวหวานลงตัว",
                smallname: "Rwanda Inzovu",
                smalldes: "หอมชาดำ แอปเปิ้ลแดง",
                productimg: "../image/Product/cafe-rwanda.webp",
                productprice: 400,
                productstock: 9
            }



           
        };
