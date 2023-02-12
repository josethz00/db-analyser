async function parse(sqlSchemaString: string) {
  let inTable = false;  /* inTable is important to ignore other things
    like types, enums, create database etc.
  */
  let relationCount = 0;
  let totalTablesCount = 0;
  let totalRelationsCount = 0;
  const tableNames: string[] = [];
  const foreignKeyTables: {originTable: string; referencedTable: string;}[] = [];

  for (const line of sqlSchemaString.split('\n')) {
    if (line.startsWith("CREATE TABLE") && line.includes("migrations")) {
      continue; // ignore migrations
    }
    if (line.startsWith("CREATE TABLE")) {
      inTable = true;
      totalTablesCount++;
      relationCount = 0; /* receives zero because a new table just 
        began, so we need to reset 
      */
      const tablename = line.split("CREATE TABLE")[1].replace(/\s/g,'').slice(0, -1);
      tableNames.push(tablename);
    }
    else if (inTable && line.includes("FOREIGN KEY")) {
      relationCount++;
      totalRelationsCount++;
      const referencedTable = line.split("REFERENCES")[1].replace(/\s/g,'').split("(")[0];
      foreignKeyTables.push({
        originTable: tableNames[tableNames.length - 1],
        referencedTable,
      });
    }
    else if (inTable && (line.startsWith(");") || line.startsWith(");\n"))) {
      inTable = false; /* terminators in the condition indicate that the
      CREATE TABLE statement has ended */
    }
  }

  const occurrences = tableNames.reduce((acc, curr) => {
    acc[curr] = 0;
    return acc;
  }, {} as { [x: string]: number });

  foreignKeyTables.forEach((table) => {
    occurrences[table.originTable] += 1;
    occurrences[table.referencedTable] += 1;
  });

  let singleRelationTablesCount = 0;

  for (const [, value] of Object.entries(occurrences)) {
    if (value === 1) {
      singleRelationTablesCount++
    }
  }

  return {
    singleRelationTablesCount,
    totalRelationsCount,
    totalTablesCount,
  }
}

export default parse;