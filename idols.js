// 掲載依頼で追加した実在アイドル
// ここに載せてよいのは、本人または所属運営から掲載依頼フォームで申し込みがあり、内容を確認できた人だけ。
// 削除依頼が来たら、その人の行を消して push する（手順は docs/掲載依頼の運用.md）。
//
// name=名前 group=グループ（いまの所属） fol=Xフォロワー数（掲載時点） color/hex=担当カラー
// 任意: city=活動拠点 genre=ジャンル toku=特典会のようす bday=誕生月(1〜12) bdd=誕生日(日) big=大きいグループなら true
// 記録用: from="本人" か "運営"、listed=掲載日（ゲームには表示しない）
//
// 例:
// {name:"〇〇〇〇", group:"〇〇〇〇", fol:3200, color:"ピンク", hex:"#ff6fa5", city:"東京", genre:"ライブアイドル", from:"本人", listed:"2026-11-01"},
window.LISTED_IDOLS = [
];

// 掲載依頼・削除依頼を受け付ける Google フォームの URL（空のあいだは「受付準備中」と表示）
window.REQUEST_FORM_URL = "";
