var Discord = require ("discord.js")
var client = new Discord.Client();

client.on("ready",function(){
    console.log("連接成功")
})

client.on("message",function(msg){
    if(msg.author == client.user){
        return;
    }
    
        if(msg.content == "你好")
    {
        msg.channel.send("你好")
    }
        if(msg.content == "早安")
    {
        msg.channel.send("早安OAO")
    }
        if(msg.content == "晚安")
    {
        msg.channel.send("晚安")
    }
        if(msg.content == "DC連結")
    {
        msg.channel.send("https://discord.gg/FxaNbXzXj7")
    }
        if(msg.content == "午安")
    {
        msg.channel.send("午安")
    }
        if(msg.content == "外掛")
    {
        msg.channel.send("幹自己找")
    }
        if(msg.content == "申請身分組")
    {
        msg.channel.send("找身分組申請員 ")
    }
        if(msg.content == "比賽規則")
    {
        msg.channel.send("玩法:4v4v4v4禁止使用的外掛:1.摔落無傷&減傷類2.增加攻擊範圍3.防推動4.防擊退5.飛行or滯空6.穿牆打人7.穿牆挖床強制安裝:1.攻擊範圍顯示mod2.座標mod積分制:床:5分/一張頭:1分/一顆最終擊殺:3分/一顆win:20分直播/錄影1.比賽時請開著dc的直播2.比賽時請開著錄影，錄影後將影片檔案傳至指定區域(嚴禁剪輯，錄影時間以#最新公告為準，只有差幾一點沒關西)違反情節輕者將計警告一，第二次將ben走sever以上如有修改將在#最新公告提醒大家 ")
    }
        if(msg.content == "pyro")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1PTHlZbry4tHB9URIhmPbtDIBqzt9PAKh?usp=sharing")
    }
         if(msg.content == "gamesense")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1CQl9_ef9676l32dnUHTtsAasKcwXReoF?usp=sharing")
    }
        if(msg.content == "hyperLethal")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1zc7WnFzuHTVPpbvM8Cdb-8xve2o804va?usp=sharing ")
    }
        if(msg.content == "轉版本模組")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1Cuq2ukPSV4ZMxKkl8LurUA2HmPyYx1t3?usp=sharing")
    }
    
        if(msg.content == "xulu")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1LJEXwz1feT9Zp9ZI_OIsEe0BAQopkqQf?usp=sharing")
    }
    
        if(msg.content == "impact")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1sIJFHMWb5kgZbpLSR7RfZBFdtCwZ2Y-I?usp=sharing")
    }
    
        if(msg.content == "snowhack")
    {
        msg.channel.send("https://drive.google.com/drive/folders/12QD8XQ8ZlS9ZKDAHIA9PwY30xEKJdw04?usp=sharing")
    }
    
        if(msg.content == "optifile")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1i1arFjwXj8t7MXCEtLzwssmg49NMhKiY?usp=sharing")
    }
    
        if(msg.content == "rusherhack")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1Z8Jfa-FUGzVNCVl8xgRh1DxfutfQxR2m?usp=sharing")
    }
    
        if(msg.content == "uwugod")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1PaOABPB9iYCnOzAhKKtFuvE_GOyfO9D8?usp=sharing")
    }
    
        if(msg.content == "salhack")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1NTpUwkMrT1IonlelbVkhLt4Ck-JPhQTk?usp=sharing")
    }
    
        if(msg.content == "ouohack")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1-4btN-vQgFhpGe4Jw3oGjrRvuX1HqKhg?usp=sharing")
    }
    
        if(msg.content == "wurstplusthree")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1oIuoMhMDVQICvUHygRM3nWtPKwJlGDL0?usp=sharing")
    }
        if(msg.content == "future")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1QlRgqgLeD5vsXTQP8ggB_WG-7gNc7z0E?usp=sharing")
    }
        if(msg.content == "其他外掛")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1tC9mWucSLME0Z92pvdT4K5KGrZl55pfr?usp=sharing")
    }  
        if(msg.content == "konc")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1bzZUJ-ZU9BDmN9kapAtv7zanmsXQW5wB?usp=sharing")

    }
    
        if(msg.content == "wwe")
    {
        msg.channel.send("https://drive.google.com/drive/folders/1CIZtAqttHMrl_uBnwSrkkRIK6fdU9_7u?usp=sharing")
    }
    
    
    
    
    
    

})

client.login("ODUzNDI0MTIxMjc4MjM0NjQ0.YMVLJg.hbLeJMMN9wvwi3i5OTFleFvwizY")