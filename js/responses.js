

const vacinName =("AstraZeneca, SPUTNIK V, Vero Cell, Comirnaty, Spikevax")

const Advise = "Nếu xung quanh bạn có người bị nhiễm Covid, hãy liên hệ ngay đến tổng đài nóng 1022 nhấn phím 3 để được trợ giúp"

const Covid = `Virus Corona là chủng virus mới chưa từng xuất hiện ở người, có tên gọi từ nguồn gốc tiếng Latin. Vi rút Corona là chủng virus được bao bọc bằng những chiếc gai bao bọc bên ngoài, tương tác với thụ thể trên tế bào, theo cơ chế tương tự chìa khóa và ổ khóa, từ đó cho phép virus xâm nhập vào bên trong.
Bùng phát vào cuối tháng 12/2019, bắt nguồn từ một chợ hải sản ở Hồ Nam, Vũ Hán, miền Trung Trung Quốc, virus Corona ban đầu được xác nhận là một loại bệnh “viêm phổi lạ” hoặc “viêm phổi không rõ nguyên nhân”. Chỉ sau 100 ngày xuất hiện, đại dịch viêm đường hô hấp cấp do virus Corona đã nhanh chóng tác động tới các lĩnh vực kinh tế, xã hội, thị trường tài chính chao đảo, nền kinh tế toàn cầu rơi vào suy thoái với tỷ lệ thất nghiệp và nghèo đói chưa từng có trong lịch sử.`

const Symptom= 'đau họng, sốt cao, ho liên tục, khó thở, tức ngực, tiêu chảy, mệt mỏi'

const Defend = 'Phải đeo khẩu trang khi tiếp xúc với người khác, rửa tay thường xuyên bằng các chất có cồn, hạn chế tụ tập đông người'

const Command = 'Chỉ thị yêu cầu người dân không được tụ tập đông người, không được tổ chức các buổi tiệc- lễ hội, hãy ở nhà khi không có việc cần thiết ra ngoài'

const vacinInfo = 'Hãy tham khảo <a href = "https://bit.ly/2WYvHkJ"> tại link </a> này nhé '



const config= {
    //VACIN KEYWORD
    'vacin' : `${vacinName}`,
    'vacxin' : `${vacinName}`,
    'vaccin' : `${vacinName}`,


    //ADVISE KEYWORD
    'tư vấn' : `${Advise}`,
    'lời khuyên' : `${Advise}`,
    

    //covid keyword
    'covid': `${Covid}`,
    'wuhan': `${Covid}`,
    'virus': `${Covid}`,

    //SYMTON KEYWORD
    'triệu chứng': `${Symptom}`,
    'chiệu chứng': `${Symptom}`,
    'biểu hiện': `${Symptom}`,

    //DEFEND KEYWORD
    'bảo vệ': `${Defend}`,
    'cần làm' : `${Defend}`,
    'phòng vệ' : `${Defend}`,

    //CMD KEYWORD
    'chỉ thị': `${Command}`,

    //vacin info
    'astrazeneca': `${vacinInfo}`,
    'sputnik v': `${vacinInfo}`, 
    'vero cell':`${vacinInfo}`,
    'comirnaty': `${vacinInfo}`,
    'spikevak':`${vacinInfo}`
    
 }


 function getBotResponse (input) {
    var matched = Object.keys(config).find(key => input.toLowerCase().search(key) > -1); // lấy ra các key trong config xong đem tìm kiếm với input nhập vào
    const result =config[matched]; // trả về kết quả trong obj theo key nếu có
    return result || 'Hãy nhập đúng tên vaccin hoặc thông tin cần tìm kiếm!';
  }









