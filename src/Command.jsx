import React, { useEffect, useState } from 'react'

const Command = ({ command, output }) => {
  const commandHeader = 'vktori@thinkpad:~$ '
  const outputHeader = '>  '

  const [commandArray, setCommandArray] = useState(commandHeader)
  const [outputArray, setOutputArray] = useState('')

  useEffect(() => {
    // Typing the command
    command.split('').forEach((char, index) => {
      setTimeout(() => {
        setCommandArray((prev) => prev + char)
      }, index * 100)
    })

    // Typing the output after the command finishes
    const commandTypingTime = command.length * 100
    output.split('').forEach((char, index) => {
      setTimeout(() => {
        setOutputArray((prev) => prev + char)
      }, commandTypingTime + index * 100)
    })
  }, [command, output])

  return (
    <div className='w-full'>
      <div className="text-yellow-400 font-mono ">
        {commandArray}
      </div>
      <div className="text-green-400 font-mono ">
        {outputHeader + outputArray}
      </div>
    </div>
  )
}

export default Command
