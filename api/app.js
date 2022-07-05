const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// init app
const app = express();


app.use(cookieParser());

// // Cookie options
// const accessTokenCookieOptions = {
//   expires: new Date(
//     Date.now() + 1 * 60 * 1000
//   ),
//   maxAge: 1 * 60 * 1000,
//   httpOnly: true,
//   sameSite: 'lax',
// };

// const refreshTokenCookieOptions = {
//   expires: new Date(
//     Date.now() + 59 * 60 * 1000
//   ),
//   maxAge: 59 * 60 * 1000,
//   httpOnly: true,
//   sameSite: 'lax',
// };


// // connect db

// middleware
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("helo");
});

// app.get('/api/classes', async (req, res) => {
//     await new Promise(resolve => setTimeout(resolve, 5000));
//     return res.json(
//         {
//             data: [
//                 {label: "class 01", value: "1"},
//                 {label: "class 02", value: "2"},
//                 {label: "class 03", value: "3"},
//                 {label: "class 04", value: "4"},
//                 {label: "class 05", value: "5"},
//             ], 
//             abc: "trying to convert transform response from react toolkit query"
//         });
// });

// app.get('/api/students', async (req, res) => {
//     var {classId} = req.query;
//     await new Promise(resolve => setTimeout(resolve, 3000));

//     var data = [
//         {studentId: 1, firstName: 'student', lastName: '01', isAssigned: true, classId: "1"},
//         {studentId: 2, firstName: 'student', lastName: '02', isAssigned: false, classId: "2"},
//         {studentId: 3, firstName: 'student', lastName: '03', isAssigned: false, classId: "2"},
//         {studentId: 4, firstName: 'student', lastName: '04', isAssigned: false, classId: "1"},
//         {studentId: 5, firstName: 'student', lastName: '05', isAssigned: false, classId: "2"},
//         {studentId: 6, firstName: 'student', lastName: '06', isAssigned: false, classId: "1"},
//         {studentId: 7, firstName: 'student', lastName: '07', isAssigned: false, classId: "2"},
//         {studentId: 8, firstName: 'student', lastName: '08', isAssigned: false, classId: "4"},
//         {studentId: 9, firstName: 'student', lastName: '09', isAssigned: true, classId: "2"},
//         {studentId: 10, firstName: 'student', lastName: '10', isAssigned: false, classId: "1"},
//         {studentId: 11, firstName: 'student', lastName: '11', isAssigned: false, classId: "1"},
//         {studentId: 12, firstName: 'student', lastName: '12', isAssigned: false, classId: "1"},
//     ];

//     if(classId) {
//         data = data.filter(p => p.classId === classId);
//     }

//     return res.json({ data });
// });

// app.post('/api/auth/register', async (req, res) => {
//     console.log(req.body);
// });

app.post('/api/auth/login', async (req, res) => {
    console.log(req.body);
    await new Promise(resolve => setTimeout(resolve, 4000));

    // create access_token + refresh_token
    res.cookie('access_token', "access_token_fake");
    res.cookie('refresh_token', "refresh_token_fake");
    res.cookie('logged_in', true, {
      // ...accessTokenCookieOptions,
      httpOnly: false,
    });

    res.status(200).json({
        status: 'success',
        access_token: "access_token_fake",
      });
});

app.get('/api/auth/logout', async (req, res) => {
    console.log("logout")
    res.cookie('access_token', '', { maxAge: 1 });
    res.cookie('refresh_token', '', { maxAge: 1 });
    res.cookie('logged_in', '', { maxAge: 1 });
    res.status(200).json({ status: 'success' });
});

app.get('/api/users/me', async (req, res) => {
  var user = allUsers.filter(p => p.id == "1")[0];

  return res.json(user);
});

app.get('/api/users/getListFriends', async (req, res) => {
  const {currentUserId} = req.query;

  var data = allUsers.filter(p => p.id !== currentUserId);

  await new Promise(resolve => setTimeout(resolve, 1000));

  return res.json({ data });
});

app.get('/api/posts/getSummaryPost', async (req, res) => {
  var hightLightImages = [
    "https://www.cnet.com/a/img/resize/f69c4042a8089d8433fdba45f1afe5935ce8d757/2020/09/22/8165dabd-9d02-4eee-af0f-064071c7c2ed/longcatsocial.jpg?auto=webp&fit=crop&height=630&width=1200",
    "https://lh3.googleusercontent.com/R9skLkjIFFr2GyA8qu_FYqeq12tPoWcyR6woaxWyGCtVqDSMjBoX89sOENskTW4jFkTipyKW-481XxCHnqhlBqm-jnFDLPEp3ux2ceQ=w1400-k",
    "https://lucloi.vn/wp-content/uploads/2021/03/Untitled-1.jpg",
    "https://img-04.stickers.cloud/packs/32268ce6-eca4-4a77-8935-1694f1520316/webp/5e5512c7-5fac-41d4-aacb-22ac5060d923.webp"
  ]

  var numberScheduleForToday = 2;
  var numberPostThisWeek = 3;

  await new Promise(resolve => setTimeout(resolve, 1000));

  return res.json({ data: { hightLightImages, numberScheduleForToday, numberPostThisWeek }});
});

app.get('/api/posts/getPostScheduleByDatetime', async (req, res) => {
  var {day, month, year} = req.query;

  var images = [
    "https://www.cnet.com/a/img/resize/f69c4042a8089d8433fdba45f1afe5935ce8d757/2020/09/22/8165dabd-9d02-4eee-af0f-064071c7c2ed/longcatsocial.jpg?auto=webp&fit=crop&height=630&width=1200",
    "https://lh3.googleusercontent.com/R9skLkjIFFr2GyA8qu_FYqeq12tPoWcyR6woaxWyGCtVqDSMjBoX89sOENskTW4jFkTipyKW-481XxCHnqhlBqm-jnFDLPEp3ux2ceQ=w1400-k",
  ]

  // if(day === 5 || day === 10 || day === 15) {
  //   console.log(day);
  //   images = [
  //     "https://www.cnet.com/a/img/resize/f69c4042a8089d8433fdba45f1afe5935ce8d757/2020/09/22/8165dabd-9d02-4eee-af0f-064071c7c2ed/longcatsocial.jpg?auto=webp&fit=crop&height=630&width=1200",
  //     "https://lh3.googleusercontent.com/R9skLkjIFFr2GyA8qu_FYqeq12tPoWcyR6woaxWyGCtVqDSMjBoX89sOENskTW4jFkTipyKW-481XxCHnqhlBqm-jnFDLPEp3ux2ceQ=w1400-k",
  //   ]
  // }

  await new Promise(resolve => setTimeout(resolve, 1000));

  return res.json(images);
});

app.get('/api/posts/getPostById', async (req, res) => {
  const {postId} = req.query;

  var post = allPosts.filter(p => p.id === postId)[0];

  await new Promise(resolve => setTimeout(resolve, 1000));

  return res.json(post);
});


const allUsers = [
  {
    id: "1",
    name: "name-1",
    email: "name1@gmail",
    avatar: "https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg",
    typeIcon: "tiktok"
  },
  {
    id: "2",
    name: "name-2",
    email: "name2@gmail",
    avatar: "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/abd83394d7564cf2a6389f6fd7be9e7a~c5_720x720.jpeg?x-expires=1657015200&x-signature=z6WIwJhEQVuBZi%2FwsymuPT%2Bhl%2BE%3D",
    typeIcon: "youtube"
  },
  {
    id: "3",
    name: "name-3",
    email: "name3@gmail",
    avatar: "https://pbs.twimg.com/media/FD-Y3soVEAE9Sjj?format=jpg&name=900x900",
    typeIcon: "instagram"
  },
  {
    id: "4",
    name: "name-4",
    email: "name4@gmail",
    avatar: "https://i.kym-cdn.com/entries/icons/facebook/000/027/852/Screen_Shot_2018-12-12_at_1.02.39_PM.jpg",
    typeIcon: "tiktok"
  },
  {
    id: "5",
    name: "name-5",
    email: "name5@gmail",
    avatar: "https://i.pinimg.com/736x/ab/9e/53/ab9e53b748f4a45b1aaad922d0788d54.jpg",
    typeIcon: "youtube"
  },
  {
    id: "6",
    name: "name-6",
    email: "name6@gmail",
    avatar: "https://pic-bstarstatic.akamaized.net/ugc/685c0664215e5668cf3dcefcb7091df6dad9e8bf.jpg",
    typeIcon: "tiktok"
  },
  {
    id: "7",
    name: "name-7",
    email: "name7@gmail",
    avatar: "https://tiermaker.com/images/templates/meme-cats-1022816/10228161621384562.jpg",
    typeIcon: "tiktok"
  }
]

const allPosts = [
  {
    id: "1",
    images: [
      "https://www.cnet.com/a/img/resize/f69c4042a8089d8433fdba45f1afe5935ce8d757/2020/09/22/8165dabd-9d02-4eee-af0f-064071c7c2ed/longcatsocial.jpg?auto=webp&fit=crop&height=630&width=1200",
      "https://lh3.googleusercontent.com/R9skLkjIFFr2GyA8qu_FYqeq12tPoWcyR6woaxWyGCtVqDSMjBoX89sOENskTW4jFkTipyKW-481XxCHnqhlBqm-jnFDLPEp3ux2ceQ=w1400-k",

    ],
    userId: "1",
    description: "one of the parts that a piece of writing is divided into, consisting of one or more sentences and beginning on a new line, one of the parts that a piece of writing is divided into ",
    tags: [
      {
        id: "1",
        name: "Party",
      },
      {
        id: "2",
        name: "Dancing",
      },
      {
        id: "3",
        name: "Mood",
      },
      {
        id: "4",
        name: "Girl",
      },
      {
        id: "5",
        name: "Boy",
      },
      {
        id: "6",
        name: "Thoughts",
      },
    ],
    dateOfPostings: [
      "2022/07/21 10:00:00",
      "2022/07/21 13:30:00",
    ]
  },
  // {
  //   id: "2",
  //   images: [
  //     "https://lucloi.vn/wp-content/uploads/2021/03/Untitled-1.jpg",
  //   ],
  //   userId: "2",
  //   description: "description testing two",
  //   tags: [
  //     {
  //       id: "1",
  //       name: "Party",
  //     },
  //   ],
  // },
  // {
  //   id: "3",
  //   images: [
  //     "https://img-04.stickers.cloud/packs/32268ce6-eca4-4a77-8935-1694f1520316/webp/5e5512c7-5fac-41d4-aacb-22ac5060d923.webp",
  //   ],
  //   userId: "3",
  //   description: "description testing three",
  //   tags: [],
  // },
]





// start server
const PORT_SERVER = 3001;
app.listen(PORT_SERVER, () =>
  console.log(`server is running on port ${PORT_SERVER}`),
);