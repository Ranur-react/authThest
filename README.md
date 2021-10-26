"# authThest" 
-------------- alur membuat google auth --------------------------------

1. mulai
2. Membuat project react native baru
1. Membuat Project pada Firebase
2. Menambah dan mendaftarkan app yang akan menggunakan firebase
3. Download file "google-services.json" lalu letakan di folder "android/appp" pada project
4. Tambahkan Boom file sesuai dokumentasi https://console.firebase.google.com/u/2/project/tutorialfirebase-2a512/overview
5. Install library yng dbutuhkan
	//install firebase
	npm install --save @react-native-firebase/app *

	//install firebase-Auth
	npm install --save @react-native-firebase/auth
6. Membuat funtions untuk "Register email"
7. Membuat funtions untuk "Login dengan email"
8. Menginstall Libarari Sign Dengan Googl Social Accounts
	//install Google
	npm install --save  @react-native-google-signin/google-signin
9. ---> mendapatkan webclient ID
	* dapatkan SHA1 Certificate untuk dimsukan ke console firebase project
		- masuk ke foler "prj/android/app"
		- tulis perintah "keytool -exportcert -keystore debug.keystore -list -v" 
		- HA1 ke conseol
		- buka file  file "google-services.json" lalu ambil client_id dengen Type:3
		- pastekan client_id tadi ke webclient_id pada  GoogleSignin.configure
10. Membua funtions crudential login google
