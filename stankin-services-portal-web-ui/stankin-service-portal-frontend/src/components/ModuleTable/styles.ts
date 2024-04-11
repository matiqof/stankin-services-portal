export const TableStyles = {
    Table: `
             display: grid;
             grid-template-columns: minmax(200px, 4fr) repeat(6, minmax(50px, 75px));
             order-collapse: collapse;
             border: 1px solid #d4d4d4;
            `,
    HeaderRow: `
        background-color: #dedede;
      `,
    HeaderCell: `border-right: 1px solid #d4d4d4;`,
    Row: `
        &:nth-of-type(odd) {
          background-color: #eff0f1;
        }
        
        &:nth-of-type(even) {
          background-color: #fff;
        }
        
        &:nth-last-of-type(-n+2) td:first-of-type {
          font-weight: 700;
        }
    `,
    Cell: `
            color: black;
            font-size: 14px;
            border-right: 1px solid #d4d4d4;
            display: flex;
                        
            &:last-child {
             border-right:none;
            }
            
            
        
            &>div {
             white-space: normal; 
             word-break: break-word;
            }
            `,
}