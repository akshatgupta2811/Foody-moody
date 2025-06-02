const restaurants = [
    {
        id: 'rest1',
        name: 'Spice Symphony',
        cuisine: 'Indian, North Indian',
        image: 'https://res.cloudinary.com/purnesh/image/upload/w_1080,f_auto/untitled-11681894291307.jpg', // Replace with actual image URL
        menu: [
            {id: 'item101', name: 'Butter Chicken', price: 10, image: 'https://www.cookingclassy.com/wp-content/uploads/2021/01/butter-chicken-3.jpg'},
            {id: 'item102', name: 'Palak Paneer', price: 9, image: 'https://healthynibblesandbits.com/wp-content/uploads/2020/01/Saag-Paneer-1.jpg'},
            {id: 'item103', name: 'Naan', price: 2, image: 'https://www.cookingclassy.com/wp-content/uploads/2021/01/naan-30.jpg'},
            {id: 'item104', name: 'Tandoori Chicken', price: 12, image: 'https://th.bing.com/th/id/OIP.uUNK8-4BC7MCe_fYgoR_lQHaLF?rs=1&pid=ImgDetMain'},
            {id: 'item105', name: 'Biryani', price: 14, image: 'https://myfoodstory.com/wp-content/uploads/2022/07/Chicken-Biryani-2.jpg'},
            {id: 'item106', name: 'Samosa', price: 4, image: 'https://th.bing.com/th/id/OIP.RltWlBLNn552yXvZwZcQSQAAAA?rs=1&pid=ImgDetMain'},
            {id: 'item107', name: 'Dal Makhani', price: 9, image: 'https://tse1.mm.bing.net/th/id/OIP._9In8s3PmuZKbohVUuDv2wHaLG?rs=1&pid=ImgDetMain'},
            {id: 'item108', name: 'Aloo Gobi', price: 8, image: 'https://www.chilipeppermadness.com/wp-content/uploads/2022/04/Aloo-Gobi-Recipe1.jpg'},
            {id: 'item109', name: 'Paneer Tikka', price: 10, image: 'https://spiceupthecurry.com/wp-content/uploads/2020/09/paneer-tikka-recipe-2.jpg'},
            {id: 'item110', name: 'Roti', price: 2, image: 'https://www.cookwithmanali.com/wp-content/uploads/2021/07/Tandoori-Roti.jpg'}
        ]
    },
    {
        id: 'rest2',
        name: "Mama Mia's Pizzeria",
        cuisine: 'Italian, Pizza',
        image: 'https://s3-media3.fl.yelpcdn.com/bphoto/bcJOOLELBhuoqrOaRuE6EQ/o.jpg',
        menu: [
            {id: 'item201', name: 'Margherita Pizza', price: 8, image: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza-recipe.jpg'},
            {id: 'item202', name: 'Pepperoni Pizza', price: 10, image: 'https://tse3.mm.bing.net/th/id/OIP.JeCl1eFd232Nc2G5O7OEUwHaHa?rs=1&pid=ImgDetMain'},
            {id: 'item203', name: 'Veggie Supreme', price: 11, image: 'https://tse2.mm.bing.net/th/id/OIP.7ZBUv-vVGE8l8_obHFhsrwHaJ3?rs=1&pid=ImgDetMain'},
            {id: 'item204', name: 'BBQ Chicken Pizza', price: 12, image: 'https://i.pinimg.com/originals/ec/1f/d3/ec1fd366a2a14042715fefeb346f5814.png'},
            {id: 'item205', name: 'Four Cheese', price: 13, image: 'https://tse2.mm.bing.net/th/id/OIP.aREg0EVPV8WFKUV3nGyXxgHaHa?rs=1&pid=ImgDetMain'},
            {id: 'item206', name: 'Hawaiian Pizza', price: 11, image: 'https://www.jessicagavin.com/wp-content/uploads/2020/07/hawaiian-pizza-16-600x900.jpg'},
            {id: 'item207', name: 'Garlic Bread', price: 5, image: 'https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg'},
            {id: 'item208', name: 'Spaghetti Carbonari', price: 13, image: 'https://tse1.mm.bing.net/th/id/OIP.wsgon7m_71LnzNonUjeIngHaJQ?rs=1&pid=ImgDetMain'},
            {id: 'item209', name: 'Lasagna', price: 14, image: 'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-4-2848x4272.jpg'},
            {id: 'item210', name: 'Caprese Salad', price: 8, image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Caprese-Salad_EXPS_FT20_50347_F_0610_1_home.jpg'}
        ]
    },
    {
        id: 'rest3',
        name: 'Sushi World',
        cuisine: 'Japanese, Sushi',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/909fb736743469.5f3de95aa0fe9.jpeg',
        menu: [
            {id: 'item301', name: 'California Roll', price: 10, image: 'https://tse4.mm.bing.net/th/id/OIP.DMTjS1Xee1jALqCKzv_78AAAAA?rs=1&pid=ImgDetMain'},
            {id: 'item302', name: 'Spicy Tuna Roll', price: 12, image: 'https://thewoodenskillet.com/wp-content/uploads/2023/06/spicy-tuna-roll-recipe-10.jpg'},
            {id: 'item303', name: 'Salmon Sashimi', price: 15, image: 'https://i.pinimg.com/originals/5b/21/cf/5b21cfd01c448908a1d333df1ff57549.jpg'},
            {id: 'item304', name: 'Tempura Udon', price: 14, image: 'https://tse1.mm.bing.net/th/id/OIP.mA7ZsO2cUndM3p2a8orK2QHaLH?rs=1&pid=ImgDetMain'},
            {id: 'item305', name: 'Miso Soup', price: 3, image: 'https://tse4.mm.bing.net/th/id/OIP.E0C_cG3dMLAqk_vIwGC6GgHaE8?rs=1&pid=ImgDetMain'},
            {id: 'item306', name: 'Edamame', price: 5, image: 'https://tse4.mm.bing.net/th/id/OIP.jtg3lFHcWEcbfTb7_9GBfQHaE8?rs=1&pid=ImgDetMain'},
            {id: 'item307', name: 'Teriyaki Chicken', price: 11, image: 'https://tse3.mm.bing.net/th/id/OIP.i26Nq8aMmUjNtFFRfUiqzgHaE8?rs=1&pid=ImgDetMain'},
            {id: 'item308', name: 'Shrimp Tempura', price: 13, image: 'https://tse3.mm.bing.net/th/id/OIP.BYx0icpyvXzQcrFaUsYDUAHaHa?rs=1&pid=ImgDetMain'},
            {id: 'item309', name: 'Tonkatsu', price: 12, image: 'https://sudachirecipes.com/wp-content/uploads/2020/02/tonkatsu-thumbnail.jpg'},
            {id: 'item310', name: 'Green Tea Ice Cream', price: 6, image: 'https://tse1.mm.bing.net/th/id/OIP.NNaIPSfdElDFF1nonv7UegAAAA?rs=1&pid=ImgDetMain'}
        ]
    },
    {
        id: 'rest4',
        name: 'Burger Haven',
        cuisine: 'American, Fast Food',
        image: 'https://media.timeout.com/images/101531641/750/562/image.jpg',
        menu: [
            {id: 'item401', name: 'Cheeseburger', price: 9, image: 'https://example.com/cheeseburger.jpg'},
            {id: 'item402', name: 'Veggie Burger', price: 8, image: 'https://example.com/veggie-burger.jpg'},
            {id: 'item403', name: 'BBQ Bacon Burger', price: 11, image: 'https://example.com/bbq-bacon-burger.jpg'},
            {id: 'item404', name: 'Chicken Sandwich', price: 10, image: 'https://example.com/chicken-sandwich.jpg'},
            {id: 'item405', name: 'Onion Rings', price: 4, image: 'https://example.com/onion-rings.jpg'},
            {id: 'item406', name: 'French Fries', price: 3, image: 'https://example.com/french-fries.jpg'},
            {id: 'item407', name: 'Milkshake', price: 5, image: 'https://example.com/milkshake.jpg'},
            {id: 'item408', name: 'Salad', price: 7, image: 'https://example.com/salad.jpg'},
            {id: 'item409', name: 'Hot Dog', price: 6, image: 'https://example.com/hot-dog.jpg'},
            {id: 'item410', name: 'Apple Pie', price: 4, image: 'https://example.com/apple-pie.jpg'}
        ]
    },
    {
        id: 'rest5',
        name: 'Taco Fiesta',
        cuisine: 'Mexican, Tacos',
        image: 'https://duyt4h9nfnj50.cloudfront.net/resized/8bff7ddbc34494155e76976dd3f94518-w2880-fe.jpg',
        menu: [
            {id: 'item501', name: 'Chicken Taco', price: 8, image: 'https://butteryourbiscuit.com/wp-content/uploads/2020/10/baked-chicken-tacos-1.jpeg'},
            {id: 'item502', name: 'Beef Taco', price: 9, image: 'https://onepotrecipes.com/wp-content/uploads/2020/01/Beef-Tacos.jpg'},
            {id: 'item503', name: 'Veggie Taco', price: 7, image: 'https://tse3.mm.bing.net/th/id/OIP.xQHFfUcdZkYHW3y3MT4qhgHaGN?rs=1&pid=ImgDetMain'},
            {id: 'item504', name: 'Fish Taco', price: 10, image: 'https://tse4.mm.bing.net/th/id/OIP.oShCKDD5XpGsZF6HkUjDBQHaJ4?rs=1&pid=ImgDetMain'},
            {id: 'item505', name: 'Nachos', price: 6, image: 'https://tse1.mm.bing.net/th/id/OIP.hWT7uRh2SxkSBDJQBSQOJgHaFj?rs=1&pid=ImgDetMain'},
            {id: 'item506', name: 'Quesadilla', price: 8, image: 'https://tse2.mm.bing.net/th/id/OIP.Vfe9AvXiKiNqAE6vjFqfiwHaLH?rs=1&pid=ImgDetMain'},
            {id: 'item507', name: 'Guacamole', price: 5, image: 'https://tse1.mm.bing.net/th/id/OIP.4G00rc-7wRpJNH7Gp-GXhwHaHa?rs=1&pid=ImgDetMain'},
            {id: 'item508', name: 'Churros', price: 4, image: 'https://tse2.mm.bing.net/th/id/OIP._VZziu4sAQzQCzaZhamqqQHaLH?rs=1&pid=ImgDetMain'},
            {id: 'item509', name: 'Salsa', price: 3, image: 'https://tse2.mm.bing.net/th/id/OIP.YwKWO2AjjISnJHjXPeT0iQAAAA?rs=1&pid=ImgDetMain'},
            {id: 'item510', name: 'Flan', price: 5, image: 'https://dirtydishesmessykisses.com/wp-content/uploads/2024/09/flan-recipe-1727346308.jpg'}
        ]
    },
    {
        id: 'rest6',
        name: 'Curry House',
        cuisine: 'Indian, Curry',
        image: 'https://tse3.mm.bing.net/th/id/OIP.lmAm-T_ffYcVfZXsnrrVdwHaEK?rs=1&pid=ImgDetMain',
        menu: [
            {id: 'item601', name: 'Chicken Curry', price: 12, image: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Chicken-Curry-Thumbnail-1024x1024.jpg'},
            {id: 'item602', name: 'Lamb Curry', price: 14, image: 'https://tse3.mm.bing.net/th/id/OIP.hXTUjJ8y4klYqp4Y6RihPQHaHa?rs=1&pid=ImgDetMain'},
            {id: 'item603', name: 'Vegetable Curry', price: 10, image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Slow-Cooked-Vegetable-Curry_EXPS_SDAS17_148481_D04_07_5b.jpg'},
            {id: 'item604', name: 'Paneer Butter Masala', price: 11, image: 'https://www.awesomecuisine.com/wp-content/uploads/2013/10/Paneer-Mutter-Masala-500x375.jpg'},
            {id: 'item605', name: 'Chana Masala', price: 9, image: 'https://tse2.mm.bing.net/th/id/OIP.NDAOT-j8CcQqTUI3tOcJbAAAAA?rs=1&pid=ImgDetMain'},
            {id: 'item606', name: 'Biryani', price: 14, image: 'https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg'},
            {id: 'item607', name: 'Raita', price: 3, image: 'https://tse1.mm.bing.net/th/id/OIP.P9BigmhJQxXAtq7OeEmdigHaHa?rs=1&pid=ImgDetMain'},
            {id: 'item608', name: 'Naan', price: 2, image: 'https://tse4.mm.bing.net/th/id/OIP.wzGKgHhBvxdqP59sJPc7NwHaHa?rs=1&pid=ImgDetMain'},
            {id: 'item609', name: 'Samosa', price: 4, image: 'https://tse1.explicit.bing.net/th/id/OIP.oljQ9w3KCBVEiq007vJStQHaHa?rs=1&pid=ImgDetMain'},
            {id: 'item610', name: 'Gulab Jamun', price: 5, image: 'https://tse1.explicit.bing.net/th/id/OIP.KeI2UV4X01HLASoBWij6lQHaK2?rs=1&pid=ImgDetMain'}
        ]
    },
    {
        id: 'rest7',
        name: 'Pasta Palace',
        cuisine: 'Italian, Pasta',
        image: 'https://tse4.mm.bing.net/th/id/OIP._YfpMRCLcpk_FIPs10HAKAHaF7?rs=1&pid=ImgDetMain',
        menu: [
            {id: 'item701', name: 'Spaghetti Bolognese', price: 12, image: 'https://www.dinneratthezoo.com/wp-content/uploads/2020/01/pasta-bolognese-5.jpg'},
            {id: 'item702', name: 'Fettuccine Alfredo', price: 13, image: 'https://cdn.loveandlemons.com/wp-content/uploads/2020/01/fettuccine-alfredo.jpg'},
            {id: 'item703', name: 'Penne Arrabbiata', price: 11, image: 'https://carlsbadcravings.com/wp-content/uploads/2022/09/arrabiata-sauce-with-penne-6a.jpg'},
            {id: 'item704', name: 'Lasagna', price: 14, image: 'https://tse3.mm.bing.net/th/id/OIP.uAC7erWhafHlQb_p30IAngHaLH?rs=1&pid=ImgDetMain'},
            {id: 'item705', name: 'Pesto Pasta', price: 12, image: 'https://th.bing.com/th/id/OIP.iCG_CktMSS-VhhRbB3CKrQHaHa?rs=1&pid=ImgDetMain'},
            {id: 'item706', name: 'Mac and Cheese', price: 10, image: 'https://tse4.mm.bing.net/th/id/OIP.QXa2JZNpNzFX-Dr-QNSXEAHaLH?rs=1&pid=ImgDetMain'},
            {id: 'item707', name: 'Garlic Bread', price: 3, image: 'https://tse3.mm.bing.net/th/id/OIP.OG_8p246xd_u0SH2qXdBrgAAAA?rs=1&pid=ImgDetMain'},
            {id: 'item708', name: 'Caesar Salad', price: 7, image: 'https://amandacooksandstyles.com/wp-content/uploads/2021/04/20210329_173814.jpg'},
            {id: 'item709', name: 'Bruschetta', price: 5, image: 'https://www.jessicagavin.com/wp-content/uploads/2020/07/bruschetta-17-1200.jpg'},
            {id: 'item710', name: 'Tiramisu', price: 6, image: 'https://elavegan.com/wp-content/uploads/2020/08/one-piece-of-gluten-free-vegan-tiramisu-on-a-plate.jpg'}
        ]
    },
    {
        id: 'rest8',
        name: 'Sushi Spot',
        cuisine: 'Japanese, Sushi',
        image: 'https://tse2.mm.bing.net/th/id/OIP.GrCe3OOH5cCPOKS_thq0FgHaF7?rs=1&pid=ImgDetMain',
        menu: [
            {id: 'item801', name: 'California Roll', price: 10, image: 'https://tse2.mm.bing.net/th/id/OIP.iZ1F6fznfUmK90Us1kaZewHaLG?rs=1&pid=ImgDetMain'},
            {id: 'item802', name: 'Spicy Tuna Roll', price: 12, image: 'https://www.alyonascooking.com/wp-content/uploads/2020/04/spicy-tuna-roll-32.jpg'},
            {id: 'item803', name: 'Salmon Sashimi', price: 15, image: 'https://th.bing.com/th/id/OIP.Hf3osO3dpdpjpgx-Uwhb4AHaE7?rs=1&pid=ImgDetMain'},
            {id: 'item804', name: 'Tempura Udon', price: 14, image: 'https://sudachirecipes.com/wp-content/uploads/2022/05/ebiten-udon-sq.jpg'},
            {id: 'item805', name: 'Miso Soup', price: 3, image: 'https://www.gimmesomeoven.com/wp-content/uploads/2016/01/Miso-Soup-Recipe-9-1100x1650.jpg'},
            {id: 'item806', name: 'Edamame', price: 5, image: 'https://tse3.mm.bing.net/th/id/OIP.mwS1lXuRFgCypuRT4N_ieAHaLH?rs=1&pid=ImgDetMain'},
            {id: 'item807', name: 'Teriyaki Chicken', price: 11, image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/26/1498598755-teriyaki-chicken.jpg'},
            {id: 'item808', name: 'Shrimp Tempura', price: 13, image: 'https://tse3.mm.bing.net/th/id/OIP.BYx0icpyvXzQcrFaUsYDUAHaHa?rs=1&pid=ImgDetMain'},
            {id: 'item809', name: 'Tonkatsu', price: 12, image: 'https://tse2.mm.bing.net/th/id/OIP.LVY58Q5HlocT6oiN536R4gHaE8?rs=1&pid=ImgDetMain'},
            {id: 'item810', name: 'Green Tea Ice Cream', price: 6, image: 'https://tse2.mm.bing.net/th/id/OIP.eGCLOZcq4sKt7G29zGQ2FgHaLH?rs=1&pid=ImgDetMain'}
        ]
    },
    {
        id: 'rest9',
        name: 'Burger Joint',
        cuisine: 'American, Fast Food',
        image: 'https://burgerjointhtx.com/wp-content/uploads/2015/11/BJ_header.jpg',
        menu: [
            {id: 'item901', name: 'Cheeseburger', price: 9, image: 'https://tse3.mm.bing.net/th/id/OIP.N8n-_gqoJVqbdXYl5ffkuAHaLH?rs=1&pid=ImgDetMain'},
            {id: 'item902', name: 'Veggie Burger', price: 8, image: 'https://tse2.mm.bing.net/th/id/OIP.Ms1Tu5-c-r5LOQ5ZLMkg5gHaE8?rs=1&pid=ImgDetMain'},
            {id: 'item903', name: 'BBQ Bacon Burger', price: 11, image: 'https://i.redd.it/6wjyz8x0v8g61.jpg'},
            {id: 'item904', name: 'Chicken Sandwich', price: 10, image: 'https://www.licious.in/blog/wp-content/uploads/2020/12/Grilled-Chicken-Sandwich-750x750.jpg'},
            {id: 'item905', name: 'Onion Rings', price: 4, image: 'https://tse1.mm.bing.net/th/id/OIP.cbq9lzvNleho1-0-9qlXdQHaLH?rs=1&pid=ImgDetMain'},
            {id: 'item906', name: 'French Fries', price: 3, image: 'https://tse2.mm.bing.net/th/id/OIP.UyXaDth-pAyEa6iU0BfgbwHaFj?rs=1&pid=ImgDetMain'},
            {id: 'item907', name: 'Milkshake', price: 5, image: 'https://tse1.mm.bing.net/th/id/OIP.ESCvryzFP-gmSimTKZnrwQHaLH?rs=1&pid=ImgDetMain'},
            {id: 'item908', name: 'Salad', price: 7, image: 'https://tse3.mm.bing.net/th/id/OIP.AkriBJbGcXA0G69_QQp8owHaEK?rs=1&pid=ImgDetMain'},
            {id: 'item909', name: 'Hot Dog', price: 6, image: 'https://tse4.mm.bing.net/th/id/OIP.dDhnYl2XQzMTTa8sT-kooQHaLH?rs=1&pid=ImgDetMain'},
            {id: 'item910', name: 'Apple Pie', price: 4, image: 'https://tse1.mm.bing.net/th/id/OIP.9ozgsSlbpOmN8K3dbJY38wHaE8?rs=1&pid=ImgDetMain'}
        ]
    },
    {
        id: 'rest10',
        name: 'Taco Truck',
        cuisine: 'Mexican, Tacos',
        image: 'https://img.freepik.com/premium-vector/tacos-truck-street-fast-food-truck-with-huge-taco-roof-takeaway-restaurant-isolated-concept-m_119217-4754.jpg',
        menu: [
            {id: 'item1001', name: 'Chicken Taco', price: 8, image: 'https://th.bing.com/th/id/OIP.Z8Bo2mF5SHywCgAaNk30_AHaKX?rs=1&pid=ImgDetMain'},
            {id: 'item1002', name: 'Beef Taco', price: 9, image: 'https://tse2.mm.bing.net/th/id/OIP.MDV2u_oMCAfF6yugvrGtwAHaHa?rs=1&pid=ImgDetMain'},
            {id: 'item1003', name: 'Veggie Taco', price: 7, image: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2021/06/Veggie-Tacos4577.jpg'},
            {id: 'item1004', name: 'Fish Taco', price: 10, image: 'https://tse3.mm.bing.net/th/id/OIP.0SXlSrdBjkcqeRKdV2TNdwHaJo?rs=1&pid=ImgDetMain'},
            {id: 'item1005', name: 'Nachos', price: 6, image: 'https://iambaker.net/wp-content/uploads/2019/01/6H5A3931.nachos.jpg'},
            {id: 'item1006', name: 'Quesadilla', price: 8, image: 'https://ohsweetbasil.com/wp-content/uploads/how-to-make-a-perfect-quesadilla-8.jpg'},
            {id: 'item1007', name: 'Guacamole', price: 5, image: 'https://tse4.mm.bing.net/th/id/OIP.bb_VxQHSnqv_LHq2Uj009gHaHa?rs=1&pid=ImgDetMain'},
            {id: 'item1008', name: 'Churros', price: 4, image: 'https://tse2.mm.bing.net/th/id/OIP.RWMY92Jt3PgERlOeulXqsgHaE8?rs=1&pid=ImgDetMain'},
            {id: 'item1009', name: 'Salsa', price: 3, image: 'https://www.thechunkychef.com/wp-content/uploads/2022/09/Incredible-Homemade-Salsa-Recipe-recipe-card.jpg'},
            {id: 'item1010', name: 'Flan', price: 5, image: 'https://natashaskitchen.com/wp-content/uploads/2023/04/Flan-Recipe-SQ.jpg'}
        ]
    }
]
const restaurantList = document.getElementById('restaurants');
const menuList = document.getElementById('menu-list');
const searchInput = document.getElementById('search-input');
const nextBtn1 = document.getElementById('next-btn-1');
const nextBtn2 = document.getElementById('next-btn-2');
const backBtn2 = document.getElementById('back-btn-2');
const backBtn3 = document.getElementById('back-btn-3');
const backBtn4 = document.getElementById('back-btn-4');
const nextBtn3 = document.getElementById('next-btn-3');
const topBackBtn = document.getElementById('top-back-btn');

// Note: For the mood detection feature to work, you need to download the face-api.js models
// and place them in a 'models' folder in the project root directory.
// You can download the models from:
// https://github.com/justadudewhohacks/face-api.js/tree/master/weights
// Ensure the following model files are included:
// - tiny_face_detector_model-shard1
// - tiny_face_detector_model-weights_manifest.json
// - face_expression_model-shard1
// - face_expression_model-weights_manifest.json
// After placing the models, the mood detection should work correctly.
const confirmBtn = document.getElementById('confirm-btn');
const addressForm = document.getElementById('address-form');
const confirmationMessage = document.getElementById('confirmation-message');
const steps = {
    step1: document.getElementById('step-1'),
    step2: document.getElementById('step-2'),
    step3: document.getElementById('step-3'),
    step4: document.getElementById('step-4'),
    step5: document.getElementById('step-5')
};

const backBtn5 = document.getElementById('back-btn-5');
backBtn5.addEventListener('click', () => {
    steps.step5.classList.remove('active');
    steps.step1.classList.add('active');
    nextBtn1.disabled = false;
    backBtn2.disabled = true;
    backBtn3.disabled = true;
    backBtn4.disabled = true;
    backBtn5.disabled = true;
    topBackBtn.style.display = 'none';
});

// Array to store order history
let orderHistory = [];

// Function to simulate order status progression
function simulateOrderStatus(orderId) {
    const statuses = ['Order Received', 'Preparing', 'Out for Delivery', 'Delivered'];
    let currentStatusIndex = 0;

    const statusInterval = setInterval(() => {
        const orderStatusElement = document.getElementById(`order-status-${orderId}`);
        if (orderStatusElement) {
            orderStatusElement.textContent = statuses[currentStatusIndex];
        }
        currentStatusIndex++;
        if (currentStatusIndex >= statuses.length) {
            clearInterval(statusInterval);
        }
    }, 3000); // Update status every 3 seconds
}

// Simulate live location updates for delivery person
let locationIntervals = {};

function simulateLiveLocation(orderId) {
    const locations = [
        'Warehouse',
        'On the way - 5 km away',
        'On the way - 200 m away',
        'Near your location',
        'Delivered'
    ];
    let currentLocationIndex = 0;

    if (locationIntervals[orderId]) {
        clearInterval(locationIntervals[orderId]);
    }

    locationIntervals[orderId] = setInterval(() => {
        const locationElement = document.getElementById(`order-location-${orderId}`);
        if (locationElement) {
            locationElement.textContent = locations[currentLocationIndex];
        }
        currentLocationIndex++;
        if (currentLocationIndex >= locations.length) {
            clearInterval(locationIntervals[orderId]);
            delete locationIntervals[orderId];
        }
    }, 3000);
}

// Function to display order history and tracking
function displayOrderHistory() {
    const orderHistoryDiv = document.getElementById('order-history');
    if (!orderHistoryDiv) {
        const newDiv = document.createElement('div');
        newDiv.id = 'order-history';
        newDiv.innerHTML = '<h3>Order History and Tracking</h3>';
        steps.step4.appendChild(newDiv);
    }
    const container = document.getElementById('order-history');
    container.innerHTML = '<h3>Order History and Tracking</h3>';

    orderHistory.forEach((order, index) => {
        const orderDiv = document.createElement('div');
        orderDiv.className = 'order-entry';
        orderDiv.id = `order-entry-${index}`;
        orderDiv.innerHTML = `
            <p><strong>Order #${index + 1}</strong></p>
            <p>Restaurant: ${order.restaurantName}</p>
            <p>Items: ${order.items.map(item => item.name + ' x ' + item.quantity).join(', ')}</p>
            <p>Total Price: $${order.totalPrice}</p>
            <p>Status: <span id="order-status-${index}">Order Received</span></p>
            <p>Live Location: <span id="order-location-${index}">Warehouse</span></p>
        `;
        container.appendChild(orderDiv);
        simulateOrderStatus(index);
        simulateLiveLocation(index);
    });
}
let selectedRestaurant = null;
let selectedMenuItems = [];
let selectedMenuItem = null;
let selectedRestaurantId = null;
let selectedMenuItemId = null;
let selectedRestaurantName = null;
let selectedMenuItemName = null;
let selectedMenuItemPrice = null;
let selectedMenuItemImage = null;
let selectedRestaurantCuisine = null;
let selectedRestaurantImage = null;
let selectedRestaurantMenu = null;
let selectedRestaurantMenuItem = null;
let selectedRestaurantMenuItemId = null;
let selectedRestaurantMenuItemName = null;
let selectedRestaurantMenuItemPrice = null;
let selectedRestaurantMenuItemImage = null;
let selectedRestaurantMenuItemQuantity = 1;
let selectedRestaurantMenuItemTotalPrice = 0;
let selectedRestaurantMenuItemTotalPriceDisplay = 0;
let selectedRestaurantMenuItemQuantityDisplay = 1;
let selectedRestaurantMenuItemPriceDisplay = 0;
let selectedRestaurantMenuItemNameDisplay = '';
let selectedRestaurantMenuItemImageDisplay = '';
let selectedRestaurantMenuItemIdDisplay = '';

// New cart array to hold multiple items
let cart = [];


// Function to display restaurants
function displayRestaurants() {
    restaurantList.innerHTML = '';
    restaurants.forEach(restaurant => {
        const restaurantItem = document.createElement('div');
        restaurantItem.className = 'restaurant-item';
        restaurantItem.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}" style="width: 100%; border-radius: 10px;" />
            <h3>${restaurant.name}</h3>
            <p>${restaurant.cuisine}</p>
        `;
        restaurantItem.addEventListener('click', () => {
            selectedRestaurant = restaurant;
            selectedRestaurantId = restaurant.id;
            selectedRestaurantName = restaurant.name;
            selectedRestaurantCuisine = restaurant.cuisine;
            selectedRestaurantImage = restaurant.image;
            nextBtn1.disabled = false;
            handleNextStep1();
        });
        restaurantList.appendChild(restaurantItem);
    });
}
// Function to display menu items
function displayMenuItems() {
    menuList.innerHTML = '';
    selectedRestaurant.menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px; border-radius: 10px;" />
            <div class="menu-info">
                <h4 class="menu-name">${item.name}</h4>
                <p class="menu-price">$${item.price}</p>
            </div>
        `;
        menuItem.addEventListener('click', () => {
            // Add item to cart or increment quantity if already in cart
            const existingItem = cart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({...item, quantity: 1});
            }
            updateCartDisplay();
            nextBtn2.disabled = false;
        });
        menuList.appendChild(menuItem);
    });
}
// Function to handle search
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredRestaurants = restaurants.filter(restaurant =>
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm)
    );
    restaurantList.innerHTML = '';
    filteredRestaurants.forEach(restaurant => {
        const restaurantItem = document.createElement('div');
        restaurantItem.className = 'restaurant-item';
        restaurantItem.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}" style="width: 100%; border-radius: 10px;" />
            <h3>${restaurant.name}</h3>
            <p>${restaurant.cuisine}</p>
        `;
        restaurantItem.addEventListener('click', () => {
            selectedRestaurant = restaurant;
            selectedRestaurantId = restaurant.id;
            selectedRestaurantName = restaurant.name;
            selectedRestaurantCuisine = restaurant.cuisine;
            selectedRestaurantImage = restaurant.image;
            nextBtn1.disabled = false;
            handleNextStep1();
        });
        restaurantList.appendChild(restaurantItem);
    });
}
// Function to handle next button for step 1
function handleNextStep1() {
    steps.step1.classList.remove('active');
    steps.step2.classList.add('active');
    displayMenuItems();
}

// Function to handle next button for step 2
function handleNextStep2() {
    if (cart.length === 0) {
        alert('Please add at least one item to the cart.');
        return;
    }
    steps.step2.classList.remove('active');
    steps.step3.classList.add('active');
    addressForm.reset();
    nextBtn3.disabled = true;
    confirmBtn.disabled = false; // Enable confirm button when entering step 3
}

function handleBackStep2() {
    steps.step2.classList.remove('active');
    steps.step1.classList.add('active');
    nextBtn1.disabled = false; // Enable next button on step 1 when going back
    backBtn2.disabled = true; // Disable back button on step 2 when going back to step 1
    backBtn3.disabled = true; // Disable back button on step 3 when going back to step 1
    backBtn4.disabled = true; // Disable back button on step 4 when going back to step 1
    topBackBtn.style.display = 'none'; // Hide top back button on step 1
}

function handleBackStep3() {
    steps.step3.classList.remove('active');
    steps.step2.classList.add('active');
    nextBtn2.disabled = false; // Enable next button on step 2 when going back
    backBtn2.disabled = false; // Enable back button on step 2
    backBtn3.disabled = true; // Disable back button on step 3 when going back to step 2
    backBtn4.disabled = true; // Disable back button on step 4 when going back to step 2
    topBackBtn.style.display = 'inline-flex'; // Show top back button on step 2
}

function handleBackStep4() {
    steps.step4.classList.remove('active');
    steps.step1.classList.add('active');
    nextBtn1.disabled = false; // Enable next button on step 1 when going back
    backBtn2.disabled = true; // Disable back button on step 2 when going back to step 1
    backBtn3.disabled = true; // Disable back button on step 3 when going back to step 1
    backBtn4.disabled = true; // Disable back button on step 4 when going back to step 1
    topBackBtn.style.display = 'none'; // Hide top back button on step 1
}
// Function to handle confirm button
function handleConfirm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const postalCode = document.getElementById('postal-code').value;
    const paymentMode = document.getElementById('payment-mode').value;

    if (name && phone && address && city && postalCode) {
        steps.step3.classList.remove('active');
        steps.step4.classList.add('active');

        // Calculate total price
        const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

        // Build cart items display
        let cartItemsHtml = '<ul>';
        cart.forEach(item => {
            cartItemsHtml += `<li>${item.name} x ${item.quantity} - $${item.price * item.quantity}</li>`;
        });
        cartItemsHtml += '</ul>';

        // Add current order to order history
        const currentOrder = {
            restaurantName: selectedRestaurantName,
            items: [...cart],
            totalPrice: totalPrice
        };
        orderHistory.push(currentOrder);

        confirmationMessage.innerHTML = `
            <h3>Order Confirmation</h3>
            <p>Restaurant: ${selectedRestaurantName}</p>
            <p>Cuisine: ${selectedRestaurantCuisine}</p>
            <p>Menu Items: ${cartItemsHtml}</p>
            <p>Total Price: $${totalPrice}</p>
            <p>Name: ${name}</p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}, ${city}, ${postalCode}</p>
            <p>Payment Mode: ${paymentMode}</p>
        `;
    } else {
        alert('Please fill in all fields.');
    }
}
const bottomNextBtn = document.getElementById('bottom-next-btn');

const viewOrderHistoryBtn = document.getElementById('view-order-history-btn');
viewOrderHistoryBtn.addEventListener('click', () => {
    steps.step4.classList.remove('active');
    steps.step5.classList.add('active');
    displayOrderHistory();
});

// Event Listeners
nextBtn1.addEventListener('click', handleNextStep1);
nextBtn2.addEventListener('click', handleNextStep2);
backBtn2.addEventListener('click', handleBackStep2);
backBtn3.addEventListener('click', handleBackStep3);
backBtn4.addEventListener('click', handleBackStep4);
confirmBtn.addEventListener('click', handleConfirm);
searchInput.addEventListener('input', handleSearch);
topBackBtn.addEventListener('click', () => {
    if (steps.step2.classList.contains('active')) {
        handleBackStep2();
    } else if (steps.step3.classList.contains('active')) {
        handleBackStep3();
    } else if (steps.step4.classList.contains('active')) {
        handleBackStep4();
    }
});

bottomNextBtn.addEventListener('click', () => {
    if (steps.step1.classList.contains('active')) {
        handleNextStep1();
    } else if (steps.step2.classList.contains('active')) {
        handleNextStep2();
    } else if (steps.step3.classList.contains('active')) {
        confirmBtn.click();
    }
});

// Function to update visibility of top back and bottom next buttons
function updateTopBackAndBottomNextButtons() {
    if (steps.step1.classList.contains('active')) {
        topBackBtn.style.display = 'none';
        bottomNextBtn.style.display = 'inline-flex';
        bottomNextBtn.disabled = nextBtn1.disabled;
        backBtn2.disabled = true;
        backBtn3.disabled = true;
        backBtn4.disabled = true;
    } else if (steps.step2.classList.contains('active')) {
        topBackBtn.style.display = 'inline-flex';
        topBackBtn.disabled = false;
        bottomNextBtn.style.display = 'inline-flex';
        bottomNextBtn.disabled = nextBtn2.disabled;
        backBtn2.disabled = false;
        backBtn3.disabled = true;
        backBtn4.disabled = true;
    } else if (steps.step3.classList.contains('active')) {
        topBackBtn.style.display = 'inline-flex';
        topBackBtn.disabled = false;
        bottomNextBtn.style.display = 'inline-flex';
        bottomNextBtn.disabled = confirmBtn.disabled;
        backBtn2.disabled = false;
        backBtn3.disabled = false;
        backBtn4.disabled = true;
    } else if (steps.step4.classList.contains('active')) {
        topBackBtn.style.display = 'inline-flex';
        topBackBtn.disabled = false;
        bottomNextBtn.style.display = 'none';
        backBtn2.disabled = false;
        backBtn3.disabled = false;
        backBtn4.disabled = false;
    } else {
        topBackBtn.style.display = 'none';
        bottomNextBtn.style.display = 'none';
        backBtn2.disabled = true;
        backBtn3.disabled = true;
        backBtn4.disabled = true;
    }
}

// Update buttons visibility on step changes
const originalHandleNextStep1 = handleNextStep1;
handleNextStep1 = function() {
    originalHandleNextStep1();
    updateTopBackAndBottomNextButtons();
};

const originalHandleNextStep2 = handleNextStep2;
handleNextStep2 = function() {
    originalHandleNextStep2();
    updateTopBackAndBottomNextButtons();
};

const originalHandleBackStep2 = handleBackStep2;
handleBackStep2 = function() {
    originalHandleBackStep2();
    updateTopBackAndBottomNextButtons();
};

const originalHandleBackStep3 = handleBackStep3;
handleBackStep3 = function() {
    originalHandleBackStep3();
    updateTopBackAndBottomNextButtons();
};

const originalHandleBackStep4 = handleBackStep4;
handleBackStep4 = function() {
    originalHandleBackStep4();
    updateTopBackAndBottomNextButtons();
};

const originalHandleConfirm = handleConfirm;
handleConfirm = function() {
    originalHandleConfirm();
    updateTopBackAndBottomNextButtons();
};

// Initial call to set button visibility
updateTopBackAndBottomNextButtons();

// Function to update cart display in step 2
function updateCartDisplay() {
    let cartSection = document.getElementById('cart-section');
    if (!cartSection) {
        cartSection = document.createElement('section');
        cartSection.id = 'cart-section';
        cartSection.setAttribute('aria-label', 'Cart Items');
        steps.step2.insertBefore(cartSection, nextBtn2);
    }
    if (cart.length === 0) {
        cartSection.innerHTML = '<p>Your cart is empty.</p>';
        nextBtn2.disabled = true;
        return;
    }
    let cartHtml = '<h3>Cart</h3><ul>';
    cart.forEach((item, index) => {
        cartHtml += `<li>${item.name} x ${item.quantity} - $${item.price * item.quantity} <button data-index="${index}" class="remove-btn">Remove</button></li>`;
    });
    cartHtml += '</ul>';
    cartSection.innerHTML = cartHtml;

    // Add event listeners for remove buttons
    const removeButtons = cartSection.querySelectorAll('.remove-btn');
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const idx = parseInt(e.target.getAttribute('data-index'));
            if (!isNaN(idx)) {
                cart.splice(idx, 1);
                updateCartDisplay();
            }
        });
    });
    nextBtn2.disabled = false;
}

// Initial display of restaurants
displayRestaurants();
// Disable buttons initially
nextBtn1.disabled = true;
nextBtn2.disabled = true;
nextBtn3.disabled = true;
backBtn2.disabled = false;
backBtn3.disabled = false;
backBtn4.disabled = false;
topBackBtn.style.display = 'none'; // Hide top back button initially
// Disable confirm button
confirmBtn.disabled = true;

// Disable next button
nextBtn1.disabled = true;
nextBtn2.disabled = true;
nextBtn3.disabled = true;
// Disable back button

backBtn2.disabled = true;
backBtn3.disabled = true;
backBtn4.disabled = true;

const video = document.getElementById('video');
const moodResult = document.getElementById('mood-result');
const suggestionsDiv = document.getElementById('suggestions');
const startMoodBtn = document.getElementById('start-mood-btn');

const moodToFoodMap = {
    happy: {
        veg: ['Ice Cream', 'Chocolate', 'Pizza'],
        non_veg: ['Chicken Wings', 'Pepperoni Pizza', 'Fish Tacos']
    },
    sad: {
        veg: ['Comfort Soup', 'Mac and Cheese', 'Hot Chocolate'],
        non_veg: ['Beef Stew', 'Chicken Pot Pie', 'Meatloaf']
    },
    angry: {
        veg: ['Spicy Tacos', 'Buffalo Cauliflower', 'Chili'],
        non_veg: ['Buffalo Wings', 'Spicy Chicken', 'Jalapeno Poppers']
    },
    surprised: {
        veg: ['Sushi (Veg)', 'Fruit Salad', 'Smoothie'],
        non_veg: ['Sushi (Fish)', 'Shrimp Cocktail', 'Crab Cakes']
    },
    neutral: {
        veg: ['Salad', 'Grilled Vegetables', 'Pasta'],
        non_veg: ['Grilled Chicken', 'Roast Beef', 'Fish and Chips']
    }
};

const moodFoodBenefits = {
    happy: {
        veg: {
            'Ice Cream': 'Boosts serotonin levels, enhancing happiness.',
            'Chocolate': 'Contains compounds that improve mood and reduce stress.',
            'Pizza': 'Comfort food that can increase dopamine release.'
        },
        non_veg: {
            'Chicken Wings': 'Rich in protein, supports energy and mood stabilization.',
            'Pepperoni Pizza': 'Provides fats that help brain function and mood.',
            'Fish Tacos': 'Contains omega-3 fatty acids that improve brain health.'
        }
    },
    sad: {
        veg: {
            'Comfort Soup': 'Warm and soothing, helps reduce stress.',
            'Mac and Cheese': 'Comfort food that can improve mood temporarily.',
            'Hot Chocolate': 'Contains antioxidants and can boost serotonin.'
        },
        non_veg: {
            'Beef Stew': 'Rich in iron and protein, supports energy levels.',
            'Chicken Pot Pie': 'Comfort food that provides warmth and satisfaction.',
            'Meatloaf': 'Protein-rich, helps maintain stable blood sugar and mood.'
        }
    },
    angry: {
        veg: {
            'Spicy Tacos': 'Capsaicin in spices can release endorphins, reducing anger.',
            'Buffalo Cauliflower': 'Spicy and healthy, helps calm the mind.',
            'Chili': 'Spices can trigger mood-enhancing endorphins.'
        },
        non_veg: {
            'Buffalo Wings': 'Spicy food that can help release tension.',
            'Spicy Chicken': 'Capsaicin helps reduce stress and anger.',
            'Jalapeno Poppers': 'Spicy and satisfying, can improve mood.'
        }
    },
    surprised: {
        veg: {
            'Sushi (Veg)': 'Light and fresh, helps maintain calmness.',
            'Fruit Salad': 'Rich in vitamins, supports brain function.',
            'Smoothie': 'Nutrient-packed, boosts energy and alertness.'
        },
        non_veg: {
            'Sushi (Fish)': 'Omega-3 rich, supports brain health and mood.',
            'Shrimp Cocktail': 'Light protein that helps maintain energy.',
            'Crab Cakes': 'Rich in nutrients that support cognitive function.'
        }
    },
    neutral: {
        veg: {
            'Salad': 'Provides essential nutrients for overall well-being.',
            'Grilled Vegetables': 'Rich in antioxidants, supports mood balance.',
            'Pasta': 'Carbohydrates help increase serotonin production.'
        },
        non_veg: {
            'Grilled Chicken': 'Lean protein that supports stable energy.',
            'Roast Beef': 'Rich in iron and protein, helps maintain mood.',
            'Fish and Chips': 'Omega-3 fatty acids support brain function.'
        }
    }
};

async function startMoodDetection() {
    try {
        await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
        await faceapi.nets.faceExpressionNet.loadFromUri('/models');
    } catch (error) {
        moodResult.textContent = 'Error loading face-api models: ' + error;
        return;
    }

    navigator.mediaDevices.getUserMedia({ video: {} })
        .then(stream => {
            video.srcObject = stream;
        })
        .catch(err => {
            moodResult.textContent = 'Error accessing webcam: ' + err;
        });

    video.addEventListener('play', () => {
        const canvas = faceapi.createCanvasFromMedia(video);
        document.getElementById('mood-detection').appendChild(canvas);
        const displaySize = { width: video.width, height: video.height };
        faceapi.matchDimensions(canvas, displaySize);

        setInterval(async () => {
            const detections = await faceapi.detectSingleFace(video, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();
            if (detections && detections.expressions) {
                const expressions = detections.expressions;
                const maxExpression = Object.keys(expressions).reduce((a, b) => expressions[a] > expressions[b] ? a : b);
                moodResult.textContent = 'Detected mood: ' + maxExpression;
                showSuggestions(maxExpression);
            } else {
                moodResult.textContent = 'No face detected';
                suggestionsDiv.innerHTML = '';
            }
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
            faceapi.draw.drawDetections(canvas, detections);
            faceapi.draw.drawFaceExpressions(canvas, detections);
        }, 1000);
    });
}

function showSuggestions(mood) {
    const foods = moodToFoodMap[mood] || moodToFoodMap['neutral'];
    const benefits = moodFoodBenefits[mood] || moodFoodBenefits['neutral'];

    suggestionsDiv.innerHTML = `
        <h3>Suggested Veg Food Items:</h3>
        <ul>
            ${foods.veg.map(food => `<li><strong>${food}</strong>: ${benefits.veg[food]}</li>`).join('')}
        </ul>
        <h3>Suggested Non-Veg Food Items:</h3>
        <ul>
            ${foods.non_veg.map(food => `<li><strong>${food}</strong>: ${benefits.non_veg[food]}</li>`).join('')}
        </ul>
    `;
}

startMoodBtn.addEventListener('click', () => {
    startMoodDetection();
    startMoodBtn.disabled = true;
});
