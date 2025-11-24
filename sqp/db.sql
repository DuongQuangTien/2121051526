Create database if not exists QuanLyPhiM;
Create table user(

);

1. Phim 
- id int 
- mã phim varchar 
- năm varchar
- thời gian timestamp default 
- diễn viên text
- đạo diễn text
- quốc gia (Id)
- thể loại (Id)

 2.  người dùng 
 - Id int 
 - tên đăng nhập varchar
 - mật khẩu varchar
 - loại tài khoản  (admin,người dùng, đạo diễn  )
 - tuổi int
 - sdt varchar
 - email varchar

 3. Thể loại
 - Id 
 - Quốc Gia varchar

