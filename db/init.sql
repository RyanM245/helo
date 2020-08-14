CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);

INSERT INTO users (username,password,profile_pic)
VALUES
('user1','1','https://depositphotos.com/51405259/stock-illustration-male-avatar-profile-picture-use.html'),
('user2','2','https://depositphotos.com/51402587/stock-illustration-female-profile-avatar-icon-dark.html'),
('user3','3','https://depositphotos.com/9883921/stock-illustration-no-user-profile-picture.html');



CREATE TABLE posts
(
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    user_id INT REFERENCES users(user_id)
);

INSERT INTO posts (title,img,content,user_id)
VALUES
('Hello World','https://miro.medium.com/max/4000/1*KUy_KKExZrSpBuv9XfyBgA.png','Welcome to JS1 I will be leading you on this learning experience',1),
('Welcome to the Jungle','https://www.muralswallpaper.com/app/uploads/turquoise-waterfall-jungle-plain-820x532.jpg','What is better then this waterfall? You are right! Nothing!',2),
('First time for everything','https://i.kym-cdn.com/photos/images/newsfeed/001/435/997/fef.png','I am the meme god!',3);