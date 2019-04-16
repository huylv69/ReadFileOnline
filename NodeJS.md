Semantic Versioning : Major.Minor.Patch

//The code formatting is available in VS Code through the following shortcuts:
On Windows Shift + Alt + F
On Mac Shift + Option + F
On Ubuntu Ctrl + Shift + I

# JS ES6: 

#API :
req.query will return a JS object after the query string is parsed.
/user?name=tom&age=55 - req.query would yield {name:"tom", age: "55"}
req.params will return parameters in the matched route. If your route is /user/:id and you make a request to /user/5 - req.params would yield {id: "5"}
req.param is a function that peels parameters out of the request. All of this can be found here.

### let - arrow function:
	- let : khai báo biến chỉ có hiệu lực trong scope của nó khác với var . 
	Ví dụ : if(true){
		let b=5;// b chỉ có hiệu lực trong 2 dấu ngoặc nhọn.
	}
	- arrow function : nếu có 1 tham số có thể bỏ ngoặc() còn nếu hơn 2 tham số thì cẩn ().
		nếu có 1 câu lệnh có thể bỏ {} và dấu ;
	Vd: 
	~~~
	let mang = [1,2,3,4];
	mang.forEach(e => console.log(e));
	//
	var mang2  = mang.map(e => e*2 ) // => tương đương với return nên ko cần return 
	//
	let add = (a,b)=> a+b;
	console.log(add(4,5));
	~~~

### Bất Đồng bộ	: JS là bất đồng bộ
	- Trong callback function chỉ thực hiện sau khi tất cả tác vụ đồng bộ thực thi xong hết. 
		VD: Dù setTimeout = 0 vẫn phải thực hiện sau cùng khi tất cả tác vụ đồng bộ thực thi xong .
### Callback hell 
	Callback hell có nhiều tác vụ bất đồng bộ gọi liên tiếp nhau.
### Promise : 
	let promise = new Promise((resolve,reject )=>{}) 
	promise.then(resolve function , reject function )
	- Với promise liên tiếp có thể dùng catch để bắt sự kiện:
		.then(resolve ).then(resolve).catch(err);
	- Promise Status : 1 promise có 2 trạng thái chờ hoặc đã xong (resolve  hoặc reject ).
		Cho dù then nhảy vào reject thì status vẫn là resolve vì xảy ra lỗi và đã được handle nên xem là resolve còn chỉ khi không có xử lý thì mới trả về status là reject 
	- Promise value : pending - undefined , xong -kết quả hoặc lỗi.
	- Phương thức resolve :
		Promise.resolve(Giá trị hoặc promise)
	- Phương thức all , race :
		Promise.all([add(4,5),multiply(4,5)]) - nhận vào mảng các promise . Kết quả trả về cũng là mảng kết quả theo thứ tự các promise . Chỉ trả về nếu tất cả resolve .
		reject ở promise bị lỗi , và trả về ở promise bị reject đầu tiên.

		Promise.race([Mảng các promise]) : Promise nào trả về kết quả đầu tiên thì trả về kết quả của race. không cần biết lỗi hay thành công và ko cần quan tâm các promise khác
	
	- Babel :
	

# nodejs socketio build web realtime 
- Socketio truyền tải dữ liệu trực tiếp 
- Ví dụ ứng dụng chat : 

	emit : phat tin hieu 
	on : lang nghe
	io.sockets.emit : gui toan bo ke ca thang send
	socket.emit: gui lai cho thang send //vi du su dung khi dang nhap
	socket.broadcast.emit : gui cho thang khac tru thang send // vi du khi nem bom thi minh khong bi anh huong
	io.to("socketid").emit()

//Link : http://npmjs.com
		http://nodejs.green
		
//Restful : Ứng dụng cung cấp các api cho yêu cầu tương ứng. 
//Model-View-Star:
	Star là liên kết model với view , các ràng buộc . 

## Library : 

	#Package cho quá trình phát triển : 
	- mochai ,  chai , grunt --save-dev
	#Package cho chương trình sử dụng: 
	- Lodash : Thao tác với mảng , colection 
	- underscore : giống Lodash ,
	- nodemon : Tự động restart server  khi code thay đổi  
	- server-here : tạo webserver linh động . (ex : here --port 8080)

#Express: 
	generator : tạo khung cho ứng dụng .
	Middle-ware : Static ,
		cookie-parser : xu ly cookie
		 body-parser:tổng hợp các tham số trong bản tin http . 
	View engine: EJS , Plug

# JavaScript : 
	Học JS
	https://github.com/kryptstorm/study-javascript

# NodeJS : 

	Stream pipe trả về trực tiếp file mà ko cần đọc  : fs.createReadStream(file).pipe(res)
	//app.post :create new and save 
	//Put : update
	//use : Middleware
	
	npm install 
	npm install package-name@version --save

	https://viblo.asia/p/huong-dan-cai-dat-express-framework-va-xay-dung-ung-dung-chat-don-gian-DZrGNQjMvVB

# module 
	- theo nguyên tắc common.js
	+ tạo : module.exports = function(){};
	+ dung : require()

#first class function : ham dung nhu mot object 
	function co the dong vai tro lm tham so , gia tri tra ve hoac co the gan cho bien
	Cho phep ham su dung nhu 1 bien

# prototype mo rong ke thua , co the them vao ca doi tuong san co : Object.prototype.
# truyen tham tri tham chieu . khi truyen tham tri thi truyen truc tiep ten bien . truyen tham chieu thi truyen ten doi tuong co thuoc tinh do . 
# Chạy hàm ngay khi khởi tạo (function(){}());
# Require : require có cache lại file 
# export vs modul.exports


#Heroku : 
Step 1: Chuẩn bị các thứ liên quan

		Cài Node.js: (Vì ví dụ mình dùng node nên đương nhiên phải cài node) 
		Vào trang https://nodejs.org/en/50 tải node for window về cài vào.
		Cài express-generator: (Cái này là framework giúp minh tạo một trang web nhanh, đúng chuẩn)
		Sau khi cài Node.js xong (có thể cần restart) bật PowerShell lên gõ:
		npm install express-generator -g
		Cài Heroku Toolbelt
		Vào trang sau tải về và cài đặt: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up218
Step 2: Tạo trang web trên local

		Dùng PowerShell tìm đến nơi cần đặt thư mục bằng lệnh cd
		Gõ: express ten_website express sẽ sinh ra một thư mục là ten_website trong đó có views, routers...
		Gõ cd ten_website để vào thư mục này
Step 3: Tạo trang web trên Heroku và gắn với local

		Đăng nhập heroku:
		Gõ: heroku login và nhập email và password đăng nhập vào.
		Tạo project trên heroku:
		Gõ: heroku apps:create ten_website
		Gắn thư mục hiện tại vào project đã tạo trên heroku
		Gõ: heroku git:remote -a ten_website
Step 4: Cập nhật trang web và upload lên Heroku

		Gõ: git add . để thêm những thay đổi mới vào lần commit này
		Gõ: git commit -am "chu thich cho lan commit nay" để commit những thay đổi và chú thích cho lần này
		Gõ: git push heroku master
		Vậy là xong. Đợi lệnh trên chạy xong là website đã có thể chạy. Bạn có thể gõ heroku open để mở trang web trên browser. Nếu bạn có nhiều app thì cần gõ heroku open --app ten_website
		Từ nay, sau khi bạn edit trên local xong chỉ cần tìm đến thư mục ten_website thực hiện Step 4 là có thể upload lên heroku, đôi khi cần login lại.
	

