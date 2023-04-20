return (
  <div className="h-fit p-1 pb-24 flex-col mx-auto">
    {messages.length > 0 ? (
      messages.map((message) => {
        if (message.sender === "User") {
          return (
            <div key={message.id} className="flex flex-row-reverse">
              <div className="max-w-[70%] p-3 m-2 rounded-3xl border border-[#CBE0E6] flex max-h-[80%] bg-white">
                <span className="text-[#3A3A3A] text-left">{message.text}</span>
              </div>
            </div>
          );
        } else {
          return (
            <div key={message.id} className="flex">
              <div className="max-w-[70%] p-3 m-2 rounded-3xl border border-[#CBE0E6] flex max-h-[80%] bg-white">
                <span className="text-[#3A3A3A] text-left">{message.text}</span>
              </div>
            </div>
          );
        }
      })
    ) : (
      <div></div>
    )}
  </div>
);
