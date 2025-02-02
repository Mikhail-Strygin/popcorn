import { Box } from "../../Box/ui/Box";
import { Details } from "./Details";
import { WatchedItem } from "./WatchedItem";
import { Summary } from "./Summary";
import { List } from "../../List/ui/List";

export function WatchedBlock({ id }) {
  return (
    <Box>
      {id && <Details id={id} />}

      {!id && (
        <>
          <Summary />
          <List>
            <WatchedItem />
          </List>
        </>
      )}
    </Box>
  );
}
