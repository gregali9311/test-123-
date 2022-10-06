INSERT INTO userid (idnum, userid, pass)
VALUES  (1, 'gregali', 1234),
        (2, 'ian', 2345),
        (3, 'isaac', 3456);

-- include a field for the message box
INSERT INTO moodtracking (id,userid, date, mood, act1, act2, act3, act4, act5, act6)
VALUES  (1, 'gregali', 01/01/2022,"Neutral", "test",'Skiing' , 'Meditation','Reading',"NULL","NULL","NULL"),
        (2, 'ian', 02/01/2022 , "Sad","test", 'Skiing' , 'Meditation','Reading', 'Watching TV', 'Eat Healthy',"NULL"),
        (3, 'isaac', 04/01/022, "Sad", "test",'Skiing' , 'Meditation','Reading', 'Watching TV', 'Eat Healthy', 'Family Time'),
        (4, 'isaac', 04/02/022, "Sad", "test",'Skiing' , 'Meditation','Reading', 'Watching TV', 'Eat Healthy', 'Family Time'),
        (5, 'isaac',04/03/022, "Sad", "test",'Skiing' , 'Meditation','Reading', 'Watching TV', 'Eat Healthy', 'Family Time'),
        (6, 'isaac', 04/04/022, "Sad", "test",'Skiing' , 'Meditation','Reading', 'Watching TV', 'Eat Healthy', 'Family Time');
