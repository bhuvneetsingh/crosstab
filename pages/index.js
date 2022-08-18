import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from "../components/common/Table";
import {useEffect, useState} from "react";
import { ResponsiveNetwork } from '@nivo/network'
//import dynamic from "next/dynamic";

export const MyResponsiveNetworkCanvas = ({ data1 /* see data tab */ }) => {

  const data= {
    "nodes": [
      {
        "id": "Node 1",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 2",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 3",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 4",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 5",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 6",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 7",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 8",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 9",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 10",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 11",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 12",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 13",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 14",
        "height": 1,
        "size": 24,
        "color": "rgb(97, 205, 187)"
      },
      {
        "id": "Node 0",
        "height": 2,
        "size": 32,
        "color": "rgb(244, 117, 96)"
      },
      {
        "id": "Node 1.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.7",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.8",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.9",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.10",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 1.11",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.7",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 2.8",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.7",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.8",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.9",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.10",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 3.11",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.7",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.8",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 4.9",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.7",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.8",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.9",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.10",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 5.11",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 6.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 6.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 6.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 6.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 6.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 6.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 6.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 6.7",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 6.8",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 6.9",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 6.10",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 6.11",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 7.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 7.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 7.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 7.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 7.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 7.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 7.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 8.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 8.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 8.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 8.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 8.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 8.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 8.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 9.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 9.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 9.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 9.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 9.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 9.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 9.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 9.7",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 9.8",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 9.9",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 9.10",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 9.11",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 10.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 10.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 10.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 10.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 10.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 10.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 10.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 10.7",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 10.8",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 10.9",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 10.10",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 11.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 11.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 11.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 11.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 11.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 11.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 11.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 11.7",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 11.8",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 11.9",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 11.10",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 11.11",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 12.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 12.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 12.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 12.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 12.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 12.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 12.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 13.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 13.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 13.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 13.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 13.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 13.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 13.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 13.7",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 13.8",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 13.9",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 13.10",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 14.0",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 14.1",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 14.2",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 14.3",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 14.4",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 14.5",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      },
      {
        "id": "Node 14.6",
        "height": 0,
        "size": 12,
        "color": "rgb(232, 193, 160)"
      }
    ],
    "links": [
      {
        "source": "Node 0",
        "target": "Node 1",
        "distance": 80
      },
      {
        "source": "Node 1",
        "target": "Node 14",
        "distance": 80
      },
      {
        "source": "Node 1",
        "target": "Node 1.0",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.1",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.2",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.3",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.4",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.5",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.6",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.7",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.8",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.9",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.10",
        "distance": 50
      },
      {
        "source": "Node 1",
        "target": "Node 1.11",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 2",
        "distance": 80
      },
      {
        "source": "Node 2",
        "target": "Node 7",
        "distance": 80
      },
      {
        "source": "Node 2",
        "target": "Node 11",
        "distance": 80
      },
      {
        "source": "Node 2",
        "target": "Node 2.0",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.1",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.2",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.3",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.4",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.5",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.6",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.7",
        "distance": 50
      },
      {
        "source": "Node 2",
        "target": "Node 2.8",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 3",
        "distance": 80
      },
      {
        "source": "Node 3",
        "target": "Node 10",
        "distance": 80
      },
      {
        "source": "Node 3",
        "target": "Node 3.0",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.1",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.2",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.3",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.4",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.5",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.6",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.7",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.8",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.9",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.10",
        "distance": 50
      },
      {
        "source": "Node 3",
        "target": "Node 3.11",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 4",
        "distance": 80
      },
      {
        "source": "Node 4",
        "target": "Node 4",
        "distance": 80
      },
      {
        "source": "Node 4",
        "target": "Node 8",
        "distance": 80
      },
      {
        "source": "Node 4",
        "target": "Node 4.0",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.1",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.2",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.3",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.4",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.5",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.6",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.7",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.8",
        "distance": 50
      },
      {
        "source": "Node 4",
        "target": "Node 4.9",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 5",
        "distance": 80
      },
      {
        "source": "Node 5",
        "target": "Node 5.0",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.1",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.2",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.3",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.4",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.5",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.6",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.7",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.8",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.9",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.10",
        "distance": 50
      },
      {
        "source": "Node 5",
        "target": "Node 5.11",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 6",
        "distance": 80
      },
      {
        "source": "Node 6",
        "target": "Node 6",
        "distance": 80
      },
      {
        "source": "Node 6",
        "target": "Node 6.0",
        "distance": 50
      },
      {
        "source": "Node 6",
        "target": "Node 6.1",
        "distance": 50
      },
      {
        "source": "Node 6",
        "target": "Node 6.2",
        "distance": 50
      },
      {
        "source": "Node 6",
        "target": "Node 6.3",
        "distance": 50
      },
      {
        "source": "Node 6",
        "target": "Node 6.4",
        "distance": 50
      },
      {
        "source": "Node 6",
        "target": "Node 6.5",
        "distance": 50
      },
      {
        "source": "Node 6",
        "target": "Node 6.6",
        "distance": 50
      },
      {
        "source": "Node 6",
        "target": "Node 6.7",
        "distance": 50
      },
      {
        "source": "Node 6",
        "target": "Node 6.8",
        "distance": 50
      },
      {
        "source": "Node 6",
        "target": "Node 6.9",
        "distance": 50
      },
      {
        "source": "Node 6",
        "target": "Node 6.10",
        "distance": 50
      },
      {
        "source": "Node 6",
        "target": "Node 6.11",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 7",
        "distance": 80
      },
      {
        "source": "Node 7",
        "target": "Node 10",
        "distance": 80
      },
      {
        "source": "Node 7",
        "target": "Node 7.0",
        "distance": 50
      },
      {
        "source": "Node 7",
        "target": "Node 7.1",
        "distance": 50
      },
      {
        "source": "Node 7",
        "target": "Node 7.2",
        "distance": 50
      },
      {
        "source": "Node 7",
        "target": "Node 7.3",
        "distance": 50
      },
      {
        "source": "Node 7",
        "target": "Node 7.4",
        "distance": 50
      },
      {
        "source": "Node 7",
        "target": "Node 7.5",
        "distance": 50
      },
      {
        "source": "Node 7",
        "target": "Node 7.6",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 8",
        "distance": 80
      },
      {
        "source": "Node 8",
        "target": "Node 8.0",
        "distance": 50
      },
      {
        "source": "Node 8",
        "target": "Node 8.1",
        "distance": 50
      },
      {
        "source": "Node 8",
        "target": "Node 8.2",
        "distance": 50
      },
      {
        "source": "Node 8",
        "target": "Node 8.3",
        "distance": 50
      },
      {
        "source": "Node 8",
        "target": "Node 8.4",
        "distance": 50
      },
      {
        "source": "Node 8",
        "target": "Node 8.5",
        "distance": 50
      },
      {
        "source": "Node 8",
        "target": "Node 8.6",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 9",
        "distance": 80
      },
      {
        "source": "Node 9",
        "target": "Node 9.0",
        "distance": 50
      },
      {
        "source": "Node 9",
        "target": "Node 9.1",
        "distance": 50
      },
      {
        "source": "Node 9",
        "target": "Node 9.2",
        "distance": 50
      },
      {
        "source": "Node 9",
        "target": "Node 9.3",
        "distance": 50
      },
      {
        "source": "Node 9",
        "target": "Node 9.4",
        "distance": 50
      },
      {
        "source": "Node 9",
        "target": "Node 9.5",
        "distance": 50
      },
      {
        "source": "Node 9",
        "target": "Node 9.6",
        "distance": 50
      },
      {
        "source": "Node 9",
        "target": "Node 9.7",
        "distance": 50
      },
      {
        "source": "Node 9",
        "target": "Node 9.8",
        "distance": 50
      },
      {
        "source": "Node 9",
        "target": "Node 9.9",
        "distance": 50
      },
      {
        "source": "Node 9",
        "target": "Node 9.10",
        "distance": 50
      },
      {
        "source": "Node 9",
        "target": "Node 9.11",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 10",
        "distance": 80
      },
      {
        "source": "Node 10",
        "target": "Node 10.0",
        "distance": 50
      },
      {
        "source": "Node 10",
        "target": "Node 10.1",
        "distance": 50
      },
      {
        "source": "Node 10",
        "target": "Node 10.2",
        "distance": 50
      },
      {
        "source": "Node 10",
        "target": "Node 10.3",
        "distance": 50
      },
      {
        "source": "Node 10",
        "target": "Node 10.4",
        "distance": 50
      },
      {
        "source": "Node 10",
        "target": "Node 10.5",
        "distance": 50
      },
      {
        "source": "Node 10",
        "target": "Node 10.6",
        "distance": 50
      },
      {
        "source": "Node 10",
        "target": "Node 10.7",
        "distance": 50
      },
      {
        "source": "Node 10",
        "target": "Node 10.8",
        "distance": 50
      },
      {
        "source": "Node 10",
        "target": "Node 10.9",
        "distance": 50
      },
      {
        "source": "Node 10",
        "target": "Node 10.10",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 11",
        "distance": 80
      },
      {
        "source": "Node 11",
        "target": "Node 11.0",
        "distance": 50
      },
      {
        "source": "Node 11",
        "target": "Node 11.1",
        "distance": 50
      },
      {
        "source": "Node 11",
        "target": "Node 11.2",
        "distance": 50
      },
      {
        "source": "Node 11",
        "target": "Node 11.3",
        "distance": 50
      },
      {
        "source": "Node 11",
        "target": "Node 11.4",
        "distance": 50
      },
      {
        "source": "Node 11",
        "target": "Node 11.5",
        "distance": 50
      },
      {
        "source": "Node 11",
        "target": "Node 11.6",
        "distance": 50
      },
      {
        "source": "Node 11",
        "target": "Node 11.7",
        "distance": 50
      },
      {
        "source": "Node 11",
        "target": "Node 11.8",
        "distance": 50
      },
      {
        "source": "Node 11",
        "target": "Node 11.9",
        "distance": 50
      },
      {
        "source": "Node 11",
        "target": "Node 11.10",
        "distance": 50
      },
      {
        "source": "Node 11",
        "target": "Node 11.11",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 12",
        "distance": 80
      },
      {
        "source": "Node 12",
        "target": "Node 12.0",
        "distance": 50
      },
      {
        "source": "Node 12",
        "target": "Node 12.1",
        "distance": 50
      },
      {
        "source": "Node 12",
        "target": "Node 12.2",
        "distance": 50
      },
      {
        "source": "Node 12",
        "target": "Node 12.3",
        "distance": 50
      },
      {
        "source": "Node 12",
        "target": "Node 12.4",
        "distance": 50
      },
      {
        "source": "Node 12",
        "target": "Node 12.5",
        "distance": 50
      },
      {
        "source": "Node 12",
        "target": "Node 12.6",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 13",
        "distance": 80
      },
      {
        "source": "Node 13",
        "target": "Node 13.0",
        "distance": 50
      },
      {
        "source": "Node 13",
        "target": "Node 13.1",
        "distance": 50
      },
      {
        "source": "Node 13",
        "target": "Node 13.2",
        "distance": 50
      },
      {
        "source": "Node 13",
        "target": "Node 13.3",
        "distance": 50
      },
      {
        "source": "Node 13",
        "target": "Node 13.4",
        "distance": 50
      },
      {
        "source": "Node 13",
        "target": "Node 13.5",
        "distance": 50
      },
      {
        "source": "Node 13",
        "target": "Node 13.6",
        "distance": 50
      },
      {
        "source": "Node 13",
        "target": "Node 13.7",
        "distance": 50
      },
      {
        "source": "Node 13",
        "target": "Node 13.8",
        "distance": 50
      },
      {
        "source": "Node 13",
        "target": "Node 13.9",
        "distance": 50
      },
      {
        "source": "Node 13",
        "target": "Node 13.10",
        "distance": 50
      },
      {
        "source": "Node 0",
        "target": "Node 14",
        "distance": 80
      },
      {
        "source": "Node 14",
        "target": "Node 2",
        "distance": 80
      },
      {
        "source": "Node 14",
        "target": "Node 14.0",
        "distance": 50
      },
      {
        "source": "Node 14",
        "target": "Node 14.1",
        "distance": 50
      },
      {
        "source": "Node 14",
        "target": "Node 14.2",
        "distance": 50
      },
      {
        "source": "Node 14",
        "target": "Node 14.3",
        "distance": 50
      },
      {
        "source": "Node 14",
        "target": "Node 14.4",
        "distance": 50
      },
      {
        "source": "Node 14",
        "target": "Node 14.5",
        "distance": 50
      },
      {
        "source": "Node 14",
        "target": "Node 14.6",
        "distance": 50
      }
    ]
  }


  return (  <ResponsiveNetwork
      data={data}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      linkDistance={function (e){return e.distance}}
      centeringStrength={0.3}
      repulsivity={6}
      nodeSize={function (n){return n.size}}
      activeNodeSize={function (n){return 1.5*n.size}}
      nodeColor={function (e){return e.color}}
      nodeBorderWidth={1}
      nodeBorderColor={{
        from: 'color',
        modifiers: [
          [
            'darker',
            0.8
          ]
        ]
      }}
      linkThickness={function (n){return 2+2*n.target.data.height}}
      linkBlendMode="multiply"
      motionConfig="wobbly"
  />)

}
const datas = {
  "nodes": [
    {
      "id": "Node 1",
      "height": 1,
      "size": 24,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "Node 2",
      "height": 1,
      "size": 24,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "Node 3",
      "height": 1,
      "size": 24,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "Node 4",
      "height": 1,
      "size": 24,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "Node 5",
      "height": 1,
      "size": 24,
      "color": "rgb(97, 205, 187)"
    },
    {
      "id": "Node 0",
      "height": 2,
      "size": 32,
      "color": "rgb(244, 117, 96)"
    },
    {
      "id": "Node 1.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 1.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 1.2",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 1.3",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 1.0.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 1.0.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 1.1.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 1.1.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 1.2.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 1.2.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 1.3.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 1.3.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 2.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 2.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 2.2",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 2.3",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 2.0.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 2.0.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 2.1.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 2.1.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 2.2.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 2.2.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 2.2.2",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 2.3.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 2.3.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 3.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 3.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 3.2",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 3.3",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 3.0.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 3.0.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 3.1.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 3.1.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 3.2.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 3.2.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 3.2.2",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 3.3.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 3.3.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 4.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 4.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 4.2",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 4.3",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 4.0.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 24.0.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 4.1.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 4.1.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 4.2.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 4.2.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 4.2.2",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 4.3.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 4.3.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 5.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 5.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 5.2",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 5.3",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 2.0.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 5.0.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 5.1.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 5.1.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 5.2.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 5.2.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 5.2.2",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },
    {
      "id": "Node 5.3.0",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    },{
      "id": "Node 5.3.1",
      "height": 0,
      "size": 12,
      "color": "rgb(232, 193, 160)"
    }
  ],
  "links": [
    {
      "source": "Node 0",
      "target": "Node 1",
      "distance": 80
    },
    {
      "source": "Node 1",
      "target": "Node 1.0",
      "distance": 50
    },
    {
      "source": "Node 1",
      "target": "Node 1.1",
      "distance": 50
    },
    {
      "source": "Node 1",
      "target": "Node 1.2",
      "distance": 50
    },
    {
      "source": "Node 1",
      "target": "Node 1.3",
      "distance": 50
    },
    {
      "source": "Node 0",
      "target": "Node 2",
      "distance": 80
    },
    {
      "source": "Node 2",
      "target": "Node 2.0",
      "distance": 50
    },
    {
      "source": "Node 2.0",
      "target": "Node 2.0.1",
      "distance": 50
    },
    {
      "source": "Node 2.0",
      "target": "Node 2.0.1",
      "distance": 50
    },
    {
      "source": "Node 2",
      "target": "Node 2.1",
      "distance": 50
    },
    {
      "source": "Node 2.1",
      "target": "Node 2.1.0",
      "distance": 50
    },
    {
      "source": "Node 2.1",
      "target": "Node 2.1.1",
      "distance": 50
    },
    {
      "source": "Node 2",
      "target": "Node 2.2",
      "distance": 50
    },
    {
      "source": "Node 2.2",
      "target": "Node 2.2.0",
      "distance": 50
    },
    {
      "source": "Node 2",
      "target": "Node 2.2.1",
      "distance": 50
    },
    {
      "source": "Node 2",
      "target": "Node 2.3",
      "distance": 50
    },
    {
      "source": "Node 2.3",
      "target": "Node 2.3.0",
      "distance": 50
    },{
      "source": "Node 2.3",
      "target": "Node 2.3.1",
      "distance": 50
    },
    {
      "source": "Node 0",
      "target": "Node 3",
      "distance": 80
    },
    {
      "source": "Node 3",
      "target": "Node 3.0",
      "distance": 50
    },
    {
      "source": "Node 3.0",
      "target": "Node 3.0.1",
      "distance": 50
    },
    {
      "source": "Node 3.0",
      "target": "Node 3.1.1",
      "distance": 50
    },
    {
      "source": "Node 3",
      "target": "Node 3.1",
      "distance": 50
    },
    {
      "source": "Node 3.1",
      "target": "Node 3.1.0",
      "distance": 50
    },
    {
      "source": "Node 3.1",
      "target": "Node 3.1.1",
      "distance": 50
    },
    {
      "source": "Node 3",
      "target": "Node 3.2",
      "distance": 50
    },
    {
      "source": "Node 3.2",
      "target": "Node 3.2.0",
      "distance": 50
    },
    {
      "source": "Node 3.2",
      "target": "Node 3.2.1",
      "distance": 50
    },
    {
      "source": "Node 3",
      "target": "Node 3.3",
      "distance": 50
    },
    {
      "source": "Node 3.3",
      "target": "Node 3.3.0",
      "distance": 50
    },
    {
      "source": "Node 3.3",
      "target": "Node 3.3.1",
      "distance": 50
    },
    {
      "source": "Node 0",
      "target": "Node 4",
      "distance": 80
    },
    {
      "source": "Node 4",
      "target": "Node 4.0",
      "distance": 50
    },
    {
      "source": "Node 4",
      "target": "Node 4.1",
      "distance": 50
    },
    {
      "source": "Node 4.1",
      "target": "Node 4.1.0",
      "distance": 50
    },
    {
      "source": "Node 4.1",
      "target": "Node 4.1.1",
      "distance": 50
    },
    {
      "source": "Node 4",
      "target": "Node 4.2",
      "distance": 50
    },
    {
      "source": "Node 4.2",
      "target": "Node 4.2.0",
      "distance": 50
    },
    {
      "source": "Node 4.2",
      "target": "Node 4.2.1",
      "distance": 50
    },
    {
      "source": "Node 4",
      "target": "Node 4.3",
      "distance": 50
    },
    {
      "source": "Node 4.3",
      "target": "Node 4.3.0",
      "distance": 50
    },
    {
      "source": "Node 4.3",
      "target": "Node 4.3.1",
      "distance": 50
    },
    {
      "source": "Node 0",
      "target": "Node 5",
      "distance": 80
    },
    {
      "source": "Node 5",
      "target": "Node 5.0",
      "distance": 50
    },
    {
      "source": "Node 5.0",
      "target": "Node 5.0.0",
      "distance": 50
    },
    {
      "source": "Node 5.0",
      "target": "Node 5.0.1",
      "distance": 50
    },
    {
      "source": "Node 5",
      "target": "Node 5.1",
      "distance": 50
    },
    {
      "source": "Node 5.1",
      "target": "Node 5.1.0",
      "distance": 50
    },
    {
      "source": "Node 5.1",
      "target": "Node 5.1.1",
      "distance": 50
    },
    {
      "source": "Node 5",
      "target": "Node 5.2",
      "distance": 50
    },
    {
      "source": "Node 5.2",
      "target": "Node 5.2.0",
      "distance": 50
    },
    {
      "source": "Node 5.2",
      "target": "Node 5.2.1",
      "distance": 50
    },
    {
      "source": "Node 5",
      "target": "Node 5.3",
      "distance": 50
    },
    {
      "source": "Node 5.3",
      "target": "Node 5.3.0",
      "distance": 50
    },
    {
      "source": "Node 5.3",
      "target": "Node 5.3.1",
      "distance": 50
    }
  ]
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

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.chart}>
        {typeof window !== 'undefined' && <MyResponsiveNetworkCanvas data={datas}/>}
        </div>
        <Table header={header} rows={rows} />
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
