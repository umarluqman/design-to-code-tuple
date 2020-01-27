/** @jsx jsx */

import { withTheme } from "emotion-theming";
import {
  Flex,
  Box,
  Text,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  Grid,
  SimpleGrid
} from "@chakra-ui/core";
import Logo from "../../public/tuple-logo.svg";
import CommandLine from "../../public/icon-command-line.svg";
import Plugin from "../../public/icon-plugin.svg";
import Latency from "../../public/icon-latency.svg";
import Control from "../../public/icon-control.svg";
import { jsx } from "@emotion/core";
import useMedia from "use-media";
import { useState } from "react";

const Index = () => {
  const xs = useMedia({ minWidth: "40em" });

  const [email, setEmail] = useState("");

  const handleEmail = e => {
    setEmail(e.target.event);
  };

  console.log("render");

  return (
    <Box>
      <Flex
        fullWidth
        background="transparent linear-gradient(180deg, #FFFFFF 0%, #F4F6F9 100%)"
        borderTop="8px solid #4652AF"
        justifyContent="center"
        pb={20}
        px={8}
      >
        <Box maxWidth="54rem" pr={xs ? 40 : undefined}>
          <Box pt={12} pb={6}>
            <Logo></Logo>
          </Box>
          <Text fontSize="5xl" color="#1F2E41" lineHeight="1.1" mb={4}>
            Remember when Slack stole Screenhero from us?
          </Text>
          <Text fontSize="3xl" color="#465568" lineHeight="1.2" mb={8}>
            We do too, and it sucked.<br></br>
            That's why we're on a mission to replace it.
          </Text>
          <Flex align="center" mb={8}>
            <Box
              fontWeight={900}
              fontSize="1xl"
              color="#FFFFFF"
              mr={2}
              backgroundColor="#4652AF"
              width="max-content"
              height="max-content"
              borderRadius="50%"
              px={2}
              py={1}
            >
              W
            </Box>

            <Text letterSpacing={0} textTransform="lowercase" color="#465568">
              <span
                css={{
                  letterSpacing: 1.8,
                  textTransform: "uppercase",
                  color: "#1F2E41"
                }}
              >
                hen Slack bought Screehero
              </span>
              , we were sure someone new would come along to make a tool
              specifically for pair programming.
            </Text>
          </Flex>
          <Text mb={4} color="#465568">
            But four years later, no one has.{" "}
          </Text>
          <Text mb={4} color="#465568">
            That sucks, because the remaining tools like Skype and Hangouts
            don't give both people full keyboard and mouse control.
          </Text>
          <Text mb={4} color="#465568">
            Have you ever tried to dictate some code for your pair to write? Or
            narrated a set of vim commands? Not fun.
          </Text>
          <Text mb={4} color="#465568">
            Another problem: if you're going to type on a remote machine, the
            connection has to be super low-latency. This is the sort of thing
            that videoconferencing tools just don't care much about.
          </Text>
          <Text mb={4} color="#465568">
            Since no one has built anything as close to as good as Screenhero
            was, we're building its spiritual successor.
          </Text>
          <Text mb={8} color="#1F2E41">
            If your sick of pairing over Skype or Hangouts give us your email
            and we’ll let you know when Tuple is ready
          </Text>
          <InputGroup
            size="lg"
            boxShadow={xs ? "0px 15px 35px #1A233F1A;" : "none"}
            width={xs ? "80%" : "100%"}
            flexDirection={{ lg: "row", xs: "column" }}
            backgroundColor={"transparent"}
            color={"transparent"}
            mt={16}
          >
            <Input
              placeholder="umarluqman.78@gmail.com"
              onChange={handleEmail}
              value={email}
              css={{ color: "black" }}
            />
            {xs ? (
              <InputRightElement width="max-content">
                <Button
                  size="lg"
                  onClick={() => {}}
                  color="white"
                  backgroundColor="#5B67C9"
                  _hover={{
                    backgroundColor: "#6f8bfb"
                  }}
                  _active={{
                    backgroundColor: "#6f8bfb"
                  }}
                >
                  <Text fontSize="sm" letterSpacing={0.5}>
                    STAY IN THE LOOP
                  </Text>
                </Button>
              </InputRightElement>
            ) : (
              <Button
                size="lg"
                onClick={() => {}}
                color="white"
                backgroundColor="#5B67C9"
                _hover={{
                  backgroundColor: "#6f8bfb"
                }}
                mt={3}
                _active={{
                  backgroundColor: "#6f8bfb"
                }}
              >
                <Text fontSize="sm" letterSpacing={0.5}>
                  STAY IN THE LOOP
                </Text>
              </Button>
            )}
          </InputGroup>
        </Box>
      </Flex>
      <Flex backgroundColor="#4652AF" py={16} fullWidth justify="center" px={8}>
        <Box maxWidth="54rem">
          <Text fontSize="2xl" color="white" mb={6}>
            Details we're sweating
          </Text>
          <SimpleGrid columns={[1, 1, 2]} spacing={12}>
            <Grid alignItems="center" gridTemplateColumns="3.5rem 1fr" gap={8}>
              <Control />
              <Box>
                <Text fontSize="lg" color="white">
                  Full-time control for two
                </Text>
                <Text color="#C8F2FF">
                  Seamless mouse and keyboard control for both parties (not
                  easy, but essential).
                </Text>
              </Box>
            </Grid>
            <Grid alignItems="center" gridTemplateColumns="3.5rem 1fr" gap={8}>
              <Latency />
              <Box>
                <Text fontSize="lg" color="white">
                  Snappy interactions
                </Text>
                <Text color="#C8F2FF">
                  An obsession with ridiculously low latency (extra not easy,
                  extra-extra essential).
                </Text>
              </Box>
            </Grid>
            <Grid alignItems="center" gridTemplateColumns="3.5rem 1fr" gap={8}>
              <CommandLine />
              <Box>
                <Text fontSize="lg" color="white">
                  Command-line friendly
                </Text>
                <Text color="#C8F2FF">
                  A proper command-line interface (lol if your pairing tool
                  isn't command-line driven).
                </Text>
              </Box>
            </Grid>
            <Grid alignItems="center" gridTemplateColumns="3.5rem 1fr" gap={8}>
              <Plugin />
              <Box>
                <Text fontSize="lg" color="white">
                  Pluginability
                </Text>
                <Text color="#C8F2FF">
                  A plugin system to let you customize your experience.
                </Text>
              </Box>
            </Grid>
          </SimpleGrid>
        </Box>
      </Flex>
      <Flex backgroundColor="#1F2E41" py={16} fullWidth justify="center" px={8}>
        <Box maxWidth="54rem">
          <Text fontSize="2xl" color="white" mb={6}>
            Frequently asked questions
          </Text>
          <Box borderTop="1px solid #2A4257" pt={3} mb={12}>
            <Grid templateColumns="20rem 1fr" gap={0}>
              <Text
                fontSize="lg"
                color="white"
                pb={3}
                css={{ gridColumn: xs ? "unset" : "span 2" }}
              >
                What exactly are you making?
              </Text>
              <Text color="#C8F2FF" lineHeight={2}>
                A tool for programmers to pair on the same machine regardless of
                how far apart they are. Both people will have full control of
                the machine with their own mouse and keyboard. We also plan to
                spend a ridiculous amount of effort on making things super
                low-latency. That's the sort of thing Skype will never care
                about, but makes an enormous difference when trying to type on a
                remote machine.
              </Text>
            </Grid>
          </Box>

          <Box borderTop="1px solid #2A4257" pt={3} mb={12}>
            <Grid templateColumns="20rem auto" gap={0}>
              <Text
                fontSize="lg"
                color="white"
                css={{ gridColumn: xs ? "unset" : "span 2" }}
                pb={3}
              >
                And who are you guys?
              </Text>
              <Text color="#C8F2FF" lineHeight={2}>
                Ben, Joel, and Spencer; three programmers who aren't happy with
                the options for remote pairing out there.
              </Text>
            </Grid>
          </Box>
          <Box borderTop="1px solid #2A4257" pt={3} mb={12}>
            <Grid templateColumns="20rem auto" gap={0}>
              <Text
                fontSize="lg"
                color="white"
                css={{ gridColumn: xs ? "unset" : "span 2" }}
                pb={3}
              >
                What's next?
              </Text>
              <Text color="#C8F2FF" lineHeight={2}>
                Shipping a v1 to a limited alpha group.
              </Text>
            </Grid>
          </Box>
          <Box borderTop="1px solid #2A4257" pt={3} mb={12}>
            <Grid templateColumns="20rem auto" gap={0}>
              <Text
                fontSize="lg"
                color="white"
                css={{ gridColumn: xs ? "unset" : "span 2" }}
                pb={3}
              >
                Can I get in the alpha?
              </Text>
              <Text color="#C8F2FF" lineHeight={2}>
                Sorry, it's invite-only for now. But if you drop your email in
                the box above, we'll put you on the list for a future invite.
              </Text>
            </Grid>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default withTheme(Index);
