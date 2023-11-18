namespace api01.Controllers

open System
open System.Collections.Generic
open System.Linq
open System.Threading.Tasks
open Microsoft.AspNetCore.Mvc
open Microsoft.Extensions.Logging
open System.Data.SQLite
open api01
open api01.Models

[<ApiController>]
[<Route("[controller]")>]
type Path02Controller (logger : ILogger<Path02Controller>) =
    inherit ControllerBase()

    [<HttpGet>]
    member _.Get() : Data01 =

        //let dbPath = "/usr/src/fsharp/core/ngTrain01/sqlite3/oldvb2cs.sqlite3"
        let dbPath = "/home/m-wachi/src/ngTrain01/sqlite3/oldvb2cs.sqlite3"

        let sqlConnectionSb = new SQLiteConnectionStringBuilder()
        sqlConnectionSb.DataSource <- dbPath

        let conn = new SQLiteConnection(sqlConnectionSb.ToString())

        conn.Open();

        let cmd = new SQLiteCommand(conn)

        let sql = "select inq_content from t_inqform where inq_id = @inq_id"

        cmd.CommandText <- sql

        cmd.Parameters.AddWithValue("inq_id", 1) |> ignore

        let rdr = cmd.ExecuteReader()

        let bRead = rdr.Read()
        let v = rdr.GetString(0)

        rdr.Close()

        conn.Close()
        (*
        let rng = System.Random()
        [|
            for index in 0..4 ->
                { Date = DateTime.Now.AddDays(float index)
                  TemperatureC = rng.Next(-20,55)
                  Summary = summaries.[rng.Next(summaries.Length)] }
        |]
        *)
        Data01(v, 12)


//
// コピーコード
//

(*
class Program
{
    static void Main(string[] args)
    {
        var sqlConnectionSb = new SQLiteConnectionStringBuilder { DataSource = "denco.db" };

        using (var cn = new SQLiteConnection(sqlConnectionSb.ToString()))
        {
            cn.Open();

            using (var cmd = new SQLiteCommand(cn))
            {
                //テーブル作成
                cmd.CommandText = "CREATE TABLE IF NOT EXISTS denco(" +
                    "no INTEGER NOT NULL PRIMARY KEY," +
                    "name TEXT NOT NULL," +
                    "type TEXT NOT NULL," +
                    "attribute TEXT NOT NULL," +
                    "maxap INTEGER NOT NULL," +
                    "maxhp INTEGER NOT NULL," +
                    "skill TEXT)";
                cmd.ExecuteNonQuery();

                //データ追加
                cmd.InsertDenco(2, "為栗メロ", "アタッカー", "eco", 310, 300, "きゃのんぱんち");
                cmd.InsertDenco(3, "新阪ルナ", "ディフェンダー", "cool", 220, 360, "ナイトライダー");
                cmd.InsertDenco(4, "恋浜みろく", "トリックスター", "heat", 300, 360, "ダブルアクセス");
                cmd.InsertDenco(8, "天下さや", "アタッカー", "cool", 400, 240);
                cmd.InsertDenco(13, "新居浜いずな", "ディフェンダー", "heat", 290, 336, "重連壁");
                cmd.InsertDenco(31, "新居浜ありす", "ディフェンダー", "heat", 270, 350, "ハッピーホリデイ");

                //MaxAPが300以上のでんこをMaxHPで降順ソート
                cmd.CommandText = "SELECT * FROM denco WHERE maxap >= 300 ORDER BY maxhp desc";
                using (var reader = cmd.ExecuteReader())
                {
                    var dump = reader.DumpQuery();
                    Console.WriteLine(dump);
                }

                //LIKE句比較（ここがLINQとちょっと違う）
                cmd.CommandText = "SELECT * FROM denco WHERE name LIKE '新居浜%'";//新居浜～で始まる名前を抽出
                using (var reader = cmd.ExecuteReader())
                {
                    var dump = reader.DumpQuery();
                    Console.WriteLine(dump);
                }
            }
        }
    }
}

public static class SQLiteExtension
{
    public static int InsertDenco(this SQLiteCommand command, int no, string name, string type, string attr, 
        int maxap, int maxhp, string skill = null)
    {
        var skillstr = skill == null ? "null" : $"'{skill}'";
        command.CommandText = "INSERT INTO denco(no, name, type, attribute, maxap, maxhp, skill) VALUES(" +
            $"{no}, '{name}', '{type}', '{attr}', {maxap}, {maxhp}, {skillstr})";
        return command.ExecuteNonQuery();
    }

    public static string DumpQuery(this SQLiteDataReader reader)
    {
        var i = 0;
        var sb = new StringBuilder();
        while(reader.Read())
        {
            if(i==0)
            {
                sb.AppendLine(string.Join("\t", reader.GetValues().AllKeys));
                sb.AppendLine(new string('=', 8 * reader.FieldCount));
            }
            sb.AppendLine(string.Join("\t", Enumerable.Range(0, reader.FieldCount).Select(x => reader.GetValue(x))));
            i++;
        }

        return sb.ToString();
    }
}
*)