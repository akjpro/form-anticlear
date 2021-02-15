## Welcome to form-anticlear

<h4>Version : 1.2</h4>

An Easy way to avoid loss of form contents even if we refresh the page.
Developed in pure Javascript. So, not required any additional libraries like jQuery.

<h3>Usage</h3>

<h4>Include form-anticlear library in your website</h4>
<pre>&lt;script src="https://cdn.jsdelivr.net/gh/akjpro/form-anticlear/base.js">&lt;/script></pre>

<h4>Add class <code>form-anticlear</code> in form or any elements.(This will consider as the parent-element, and all its child elements will get this affected)</h4>
<pre>&lt;form class="form-anticlear"></code><br><code>&nbsp;&nbsp;&nbsp;&lt;input type="text" name="myText"></code><br><code>&lt;/form></code></pre>

<h3>Additional Options</h3>

<h4>Exclude from anticlear</h4>
<p>Add class <code>form-anticlear-none</code> to the elements. This will be affected to the applied elements and its child elements.</p>
<pre>&lt;input type="text" class="from-anticlear-none"></pre>

<h4>Form Clear Method</h4>
<p><code>formAntiClear.clear()</code> :  to clear all the form elements coming inside of <code>form-anticlear</code> class.</p>
<p><code>formAntiClear.clear(&lt;Selector>)</code> :  To clear the elements with selectors (id, classname etc).</p>

<h4>Handling Event</h4>
<p>Able to handle <code>anticleared</code> event to do something after data loaded to form.</p>
<h5>Javascript</h5>
<pre>document.addEventListener('anticleared', function (e) {
     //Statements
}, false);</pre>
<h5>jQuery</h5>
<pre>$(document).on('anticleared',function (e) {
     //Statements
})</pre>

<hr>
<h2>Examples</h2>
<h4> Normal Form without form-anticlear class</h4>
<h6>Code:</h6>
<pre>
  &lt;form class="">
    &lt;input type="text" name="txt_name" placeholder="Enter your Name">
  &lt;/form>
</pre>
<h6>Output:</h6>
 <form class="">
    <input type="text" name="txt_name" placeholder="Enter your Name">
 </form>
 
 <h4> Form with form-anticlear class</h4>
<h6>Code:</h6>
<pre>
  &lt;form class="form-anticlear">
    &lt;input type="text" name="txt_name" placeholder="Enter your Name">
  &lt;/form>
</pre>
<h6>Output:</h6>
 <form class="form-anticlear">
    <input type="text" name="txt_name" placeholder="Enter your Name">
 </form>
<script src="https://cdn.jsdelivr.net/gh/akjpro/form-anticlear/base.js"></script>
