import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from "../components/common/Table";
import {useEffect, useState} from "react";


const TableRow = ({ row }) => {
  return (
      <>
        <tr>
          {row.map((val, number) => <td key={[number, 'td'].join("_")}>{val}</td>)}
        </tr>
      </>
  )
}

const questions= {
  "1":{
    name: "Dine in or take out",
    options:["Dine in","Take out"]
  },
  "2":{
    name: "what describes the food quality best",
    options:[
      "Excellent",
      "Good",
      "Average",
      "Dissatisfied"
    ]
  },
  "3":{
    name: "what describes the order accuracy best",
    options:[
      "Excellent",
      "Good",
      "Average",
      "Dissatisfied"
    ]
  },
  "4":{
    name: "what describes the overall service best",
    options:[
      "Excellent",
      "Good",
      "Average",
      "Dissatisfied"
    ]
  },
  "5":{
    name: "what describes the value for money best",
    options:[
      "Excellent",
      "Good",
      "Average",
      "Dissatisfied"
    ]
  },
  "6":{
    name: "what describes the overall experience best",
    options:[
      "Excellent",
      "Good",
      "Average",
      "Dissatisfied"
    ]
  },
}




const header = ['question', 'options',"Dine in","Take out"]


const data=[{
  1: "Take out",
  2: "Average",
  3: "Good",
  4: "Good",
  5: "Average",
  6: "Good"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Good",
  5: "Good",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Good",
  3: "Good",
  4: "Excellent",
  5: "Good",
  6: "Good"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Good",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Dissatisfied",
  3: "Dissatisfied",
  4: "Dissatisfied",
  5: "Dissatisfied",
  6: "Average"
}, {
  1: "Dine in",
  2: "Good",
  3: "Good",
  4: "Good",
  5: "Average",
  6: "Good"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Good",
  3: "Good",
  4: "Good",
  5: "Good",
  6: "Good"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Good",
  6: "Good"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Good",
  3: "Average",
  4: "Average",
  5: "Good",
  6: "Average"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Good",
  4: "Good",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Good",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Good",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Good",
  5: "Excellent",
  6: "Good"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Good",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Good",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Good",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Good",
  6: "Good"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Good",
  5: "Good",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Good",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Good"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Good",
  4: "Excellent",
  5: "Good",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Good",
  6: "Good"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Take out",
  2: "Excellent",
  3: "Good",
  4: "Good",
  5: "Good",
  6: "Good"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}, {
  1: "Dine in",
  2: "Excellent",
  3: "Excellent",
  4: "Excellent",
  5: "Excellent",
  6: "Excellent"
}]



export default function Home() {

  const headerQuestion = 1;
  const [rows, setRows] = useState({})

  const populateRow = (record, rows) =>{
    Object.entries(record).filter(([key, value]) => key !== "1").map(([key, value]) => {
      if(!rows[questions[key].name])
      {
        rows[questions[key].name] = {}
      }
      if(!rows[questions[key].name][value])
      {
        const obj = {};
        questions[1].options.map(headerItem => obj[headerItem] = 0)
        rows[questions[key].name][value] = obj
      }
      /*if(!rows[questions[key].name][value][record])
      {
        rows[questions[key].name][value][record] = {}
      }*/
      rows[questions[key].name][value][record[headerQuestion]] = rows[questions[key].name][value][record[headerQuestion]] ? rows[questions[key].name][value][record[headerQuestion]] + 1 : 1;
    })
  }
  useEffect(() => {
    if(Object.keys(rows).length === 0)
    {
      const rows = {}
      data.map(record => populateRow(record, rows));
      setRows(rows);
    }
  })

  console.log(rows)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Table header={header} rows={rows} />
       {/* <table>
          <thead>
          <tr>
            <th>fields</th>
            {options[0].map(head => <th>{head}</th>)}
          </tr>
          </thead>
          <tbody>
          <td> {fields.map((head, headNum) => <th key={[headNum, 'header'].join("_")}>{head}</th>)}
            {datas.map((row, rowNum) => <TableRow key={[rowNum, 'row'].join("_")} row={row} />)}
          </td>
          </tbody>
        </table>*/}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
