
CREATE TABLE heroes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    street_name TEXT, 
    age INTEGER, 
    powers TEXT,
    picture_url TEXT
);

INSERT INTO heroes (name, street_name, age, powers, picture_url) VALUES ('Batman', 'Bruce', 45, 'super-rich, tool-belt, cool-buttler', 'https://www.lego.com/en-us/batmanmovie/characters');
INSERT INTO heroes (name, street_name, age, powers, picture_url) VALUES ('Homer', 'Springfield', 30, 'unlimited hunger and thirst, mediocre dad, nuclear plant safety dude', 'http://cdn.skim.gs/images/homer-simpson-doughnuts/what-homer-simpson-taught-us-about-doughnuts');
INSERT INTO heroes (name, street_name, age, powers, picture_url) VALUES ('Cuphead', 'Cuppie', 20, 'Milk shooting, jumping, dodging', 'https://http2.mlstatic.com/camiseta-ou-baby-look-cuphead-jogo-xbox-one-game-modelo-7-D_NQ_NP_938682-MLB26383675962_112017-F.jpg');
INSERT INTO heroes (name, street_name, age, powers, picture_url) VALUES ('Thor', 'arisztid', 20, 'hammer, lightning, super strength, super good looks, can spit that fire bo-ah','https://files.slack.com/files-pri/T039C2PUY-FBK1R1TEG/image.png');
INSERT INTO heroes (name, street_name, age, powers, picture_url) VALUES ('Superman', 'Tyler', 30, 'flying, laser-eyes, freeze breath, actual moon walk, kicking footballs', 'https://www.writeups.org/wp-content/uploads/Superman-Robot-DC-Comics.jpg');

-- Create & Return Created Hero
INSERT INTO heroes 
(name, street_name, age, powers, picture_url) 
VALUES 
(${name}, ${streetName}, ${age}, ${powers}, ${pictureUrl})
returning *;

-- Read 
SELECT * FROM heroes;

