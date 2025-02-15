const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Me</h2>
      <form className="max-w-lg mx-auto p-8 glass">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md mb-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md mb-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white" />
        <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"></textarea>
        <button className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-purple-600 dark:hover:bg-purple-700 text-white rounded-lg">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
