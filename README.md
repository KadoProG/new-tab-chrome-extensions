# Chrome の HOME を好きにできる拡張機能

| HOME画面                                                                                                                                            | 編集ダイアログ表示                                                                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="898" alt="スクリーンショット 2024-10-28 7 16 00" src="https://github.com/user-attachments/assets/1b80a080-4f1b-47c6-8da6-c52769c8e85f"> | <img width="898" alt="スクリーンショット 2024-10-28 7 18 28" src="https://github.com/user-attachments/assets/45d5406a-1166-47d1-8f08-208b092586eb"> |

データはローカルストレージに保存され、追加・編集ができます。

## 機能一覧

- Webショートカットリンク追加機能
- プライベートIPアドレス表示機能
- 現在時刻表示機能

## 起動・デプロイ方法

```shell
yarn # install package
yarn build # build
```

ビルド後、[Chrome拡張機能](chrome://extensions/)を開き、そこに`build`フォルダをドラッグすると、拡張機能が有効になります。（ビルドフォルダを削除すると拡張機能も消去されます）
