var express = require('express');
var router = express.Router();
var connection = require('../db/sql.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/goods/list', function(req, res, next) {
  res.send({
    code:0,
    data:[
      {
        id:0,
        name:'推荐',
        data:[
          {
            id:0,
            name:'推荐茶',
            list:[
              {
                id:0,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
              {
                id:1,
                name:'绿茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:2,
                name:'红茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:3,
                name:'黑茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:4,
                name:'龙井',
                imgUrl:'images/cases/1.png'
              },
              {
                id:5,
                name:'茶具',
                imgUrl:'images/cases/1.png'
              },
              {
                id:6,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
              {
                id:7,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
            ]
          }
        ]
      },
      // 第二个一级元素
      {
        id:1,
        name:'绿茶',
        data:[
          {
            id:0,
            name:'绿茶',
            list:[
              {
                id:0,
                name:'龙井',
                imgUrl:'images/cases/1.png'
              },
              {
                id:1,
                name:'黄山毛峰',
                imgUrl:'images/cases/1.png'
              },
              {
                id:2,
                name:'雀舌',
                imgUrl:'images/cases/1.png'
              },
              {
                id:3,
                name:'安吉白茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:4,
                name:'六安瓜片',
                imgUrl:'images/cases/1.png'
              }
        
            ]
          }
        ]
      },
      {
        id:2,
        name:'乌龙',
        data:[
          {
            id:0,
            name:'乌龙',
            list:[
              {
                id:0,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
              {
                id:1,
                name:'绿茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:2,
                name:'红茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:3,
                name:'黑茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:4,
                name:'龙井',
                imgUrl:'images/cases/1.png'
              },
              {
                id:5,
                name:'茶具',
                imgUrl:'images/cases/1.png'
              },
              {
                id:6,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
              {
                id:7,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
            ]
          }
        ]
      },
      {
        id:3,
        name:'红茶',
        data:[
          {
            id:0,
            name:'红茶',
            list:[
              {
                id:0,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
              {
                id:1,
                name:'绿茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:2,
                name:'红茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:3,
                name:'黑茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:4,
                name:'龙井',
                imgUrl:'images/cases/1.png'
              },
              {
                id:5,
                name:'茶具',
                imgUrl:'images/cases/1.png'
              },
              {
                id:6,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
              {
                id:7,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
            ]
          }
        ]
      },
      {
        id:4,
        name:'白茶',
        data:[
          {
            id:0,
            name:'白茶',
            list:[
              {
                id:0,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
              {
                id:1,
                name:'绿茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:2,
                name:'红茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:3,
                name:'黑茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:4,
                name:'龙井',
                imgUrl:'images/cases/1.png'
              },
              {
                id:5,
                name:'茶具',
                imgUrl:'images/cases/1.png'
              },
              {
                id:6,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
              {
                id:7,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
            ]
          }
        ]
      },
      {
        id:5,
        name:'普尔',
        data:[
          {
            id:0,
            name:'普尔',
            list:[
              {
                id:0,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
              {
                id:1,
                name:'绿茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:2,
                name:'红茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:3,
                name:'黑茶',
                imgUrl:'images/cases/1.png'
              },
              {
                id:4,
                name:'龙井',
                imgUrl:'images/cases/1.png'
              },
              {
                id:5,
                name:'茶具',
                imgUrl:'images/cases/1.png'
              },
              {
                id:6,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
              {
                id:7,
                name:'铁观音',
                imgUrl:'images/cases/1.png'
              },
            ]
          }
        ]
      },
    ]
  })
});

router.get('/api/goods/shopList',function(req,res,next){
  let [searchName,orderName] = Object.keys(req.query);
  let [name,order] = Object.values(req.query);

  connection.query('select * from goods_list where name like "%'+name+'%" order by '+orderName+' '+order+'', function(error,results){
    res.send({
      code:0,
      data:results
    })
  })
});

/* 铁观音数据 */
router.get('/api/index_list/2/data/1', function(req, res, next) {
  res.send({
    data:[
      {
        id:1,
        type:'adList',
        data:[
          {
            id:1,
            imgUrl:'./images/cases/paper2.jpg'
          },
          {
            id:2,
            imgUrl:'./images/cases/paper3.jpg'
          }
        ]
      },
      {
        id:2,
        type:'likeList',
        data:[
          { 
            id:1,
            imgUrl:'./images/cases/fabric2.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:2,
            imgUrl:'./images/cases/fabric3.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:3,
            imgUrl:'./images/cases/paper2.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:4,
            imgUrl:'./images/cases/paper3.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:5,
            imgUrl:'./images/cases/paper3.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:6,
            imgUrl:'./images/cases/paper3.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:7,
            imgUrl:'./images/cases/paper3.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:8,
            imgUrl:'./images/cases/paper3.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:9,
            imgUrl:'./images/cases/paper3.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:10,
            imgUrl:'./images/cases/paper3.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:11,
            imgUrl:'./images/cases/paper3.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:12,
            imgUrl:'./images/cases/paper3.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:13,
            imgUrl:'./images/cases/paper3.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          }
        ]
      }
    ]
  })
})

/* 大红袍数据 */
router.get('/api/index_list/1/data/1', function(req, res, next) {
  res.send({
    data:[
      {
        id:1,
        type:'adList',
        data:[
          {
            id:1,
            imgUrl:'./images/cases/fabric1.jpg'
          },
          {
            id:2,
            imgUrl:'./images/cases/fabric2.jpg'
          }
        ]
      },
      {
        id:2,
        type:'likeList',
        data:[
          { 
            id:1,
            imgUrl:'./images/cases/fabric2.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:2,
            imgUrl:'./images/cases/fabric3.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:3,
            imgUrl:'./images/cases/paper2.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          },        
          { 
            id:4,
            imgUrl:'./images/cases/paper3.jpg',
            name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
            price: 299
          }
        ]
      }
    ]
  })
})

/* 推荐数据 */
router.get('/api/index_list/0/data/1', function(req, res, next) {
  res.send({
    code:0,
    data:{
      topBar:[
        {id:0,label:'推荐'},
        {id:1,label:'金骏眉'},
        {id:2,label:'大红袍'},
        {id:3,label:'大观音'},
        {id:4,label:'绿茶'},
        {id:5,label:'红茶'},
        {id:6,label:'黑茶'}
      ],
      data:[
        {
          id:0,
          type:'swiperList',
          data:[
            {
              id:0,
              imgUrl:'./images/swiper/1.jpg'
            },
            {
              id:1,
              imgUrl:'./images/swiper/3.jpg'
            },  
            {
              id:2,
              imgUrl:'./images/swiper/4.jpg'
            }
          ]
        },
        {
          id:1,
          type:'iconsList',
          data:[
            {
              id:1,
              title:'自饮茶',
              imgUrl:'./images/1.png'
            },
            {
              id:2,
              title:'茶具',
              imgUrl:'./images/2.png'
            },
            {
              id:3,
              title:'茶礼盒',
              imgUrl:'./images/3.png'
            },
            {
              id:4,
              title:'领福利',
              imgUrl:'./images/4.png'
            },
            {
              id:5,
              title:'官方验证',
              imgUrl:'./images/7.png'
            }
          ]
        },
        {
          id:2,
          type:'recommendList',
          data:[
            {
              id: 1,
              title: "龙井250g",
              content: "鲜爽甘醇 口粮首选",
              price: "68",
              imgUrl: "./images/cases/fabric1.jpg"
            },
            {
              id: 1,
              title: "红茶ABC",
              content: "鲜爽甘醇 口粮首选",
              price: "68",
              imgUrl: "./images/cases/fabric1.jpg"
            }
          ]
        },
        {
          id:2,
          type:'likeList',
          data:[
            { 
              id:1,
              imgUrl:'./images/cases/fabric2.jpg',
              name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
              price: 299
            },        
            { 
              id:2,
              imgUrl:'./images/cases/fabric3.jpg',
              name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
              price: 299
            },        
            { 
              id:3,
              imgUrl:'./images/cases/paper2.jpg',
              name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
              price: 299
            },        
            { 
              id:4,
              imgUrl:'./images/cases/paper3.jpg',
              name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
              price: 299
            },        
            { 
              id:5,
              imgUrl:'./images/cases/fabric3.jpg',
              name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
              price: 299
            },        
            { 
              id:6,
              imgUrl:'./images/cases/paper3.jpg',
              name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
              price: 299
            },        
            { 
              id:7,
              imgUrl:'./images/cases/fabric3.jpg',
              name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
              price: 299
            },        
            { 
              id:8,
              imgUrl:'./images/cases/paper3.jpg',
              name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
              price: 299
            },        
            { 
              id:9,
              imgUrl:'./images/cases/fabric3.jpg',
              name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
              price: 299
            },        
            { 
              id:10,
              imgUrl:'./images/cases/paper3.jpg',
              name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
              price: 299
            },        
            { 
              id:11,
              imgUrl:'./images/cases/fabric3.jpg',
              name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
              price: 299
            },        
            { 
              id:12,
              imgUrl:'./images/cases/pvc3.jpg',
              name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
              price: 299
            },        
            { 
              id:13,
              imgUrl:'./images/cases/pvc2.jpg',
              name:'大红双面PVC装帧纸，装帧布 厂家定做1米门幅',
              price: 299
            }
          ]
        }
      ]
    }
  });
});

module.exports = router;
