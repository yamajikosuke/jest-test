//export default (name: string): string => `Hello, ${name}!`;

//TypeScript超入門(2)：構文を理解する
//https://qiita.com/ringtail003/items/7ccf992f18b768e0e633
function hoge1(name: string): string{ //戻り値に型を指定する
    console.log("**** 2 ****: ", name);
    return `Hello, ${name}!`;
}

function hoge2(name: string): string{ //戻り値に型を指定する
    return `Good morning, ${name}!`;
}

function foo(name: string): string{
    console.log("**** 1 ****: ", name);
    if (name == "Tom") {
        return hoge1(name);
    } else {
        return hoge2(name);
    }
}

export = foo;