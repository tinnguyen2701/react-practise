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
  const {currentUserId} = req.body;

  var data = allUsers.filter(p => p.id !== currentUserId);

  await new Promise(resolve => setTimeout(resolve, 1000));

  return res.json({ data });
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







// start server
const PORT_SERVER = 3001;
app.listen(PORT_SERVER, () =>
  console.log(`server is running on port ${PORT_SERVER}`),
);