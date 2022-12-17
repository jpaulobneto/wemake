import { Flex, List, ListIcon, ListItem, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { RiMailLine } from 'react-icons/ri'
import { SiInstagram } from 'react-icons/si'
import { Link } from '../Link'

export default function Footer() {
  return (
    <Flex as="footer" bg="black" color="white" justify="center">
      <Flex w="80%" py="14" borderTop="2px solid white" justify="center">
        <VStack spacing="12" width="fit-content">
          <Image src="/wemake-logo-white.png" width="220" height="57" />

          <VStack spacing="5">
            <Text>We Make - Educação Tecnológica</Text>

            <List spacing="1">
              <ListItem>
                <ListIcon as={ImLocation} color="brand.500" />
                João Pessoa - PB, Brasil
              </ListItem>
              <ListItem>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/wemake.tec"
                  color="inherit"
                  fontWeight="normal"
                >
                  <ListIcon as={SiInstagram} color="brand.500" />
                  @wemake.tec
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:+5583982301530"
                  color="inherit"
                  fontWeight="normal"
                >
                  <ListIcon as={BsFillTelephoneFill} color="brand.500" />
                  +55 83 98230-1530
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:contato@wemake.tec.br"
                  color="inherit"
                  fontWeight="normal"
                >
                  <ListIcon as={RiMailLine} color="brand.500" />
                  contato@wemake.tec.br
                </Link>
              </ListItem>
            </List>
          </VStack>
        </VStack>
      </Flex>
    </Flex>
  )
}
